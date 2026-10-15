import { NextResponse } from "next/server";
import { allowLeadAttempt } from "@/lib/leadAbuse";
import {
  getProjectRecommendation,
  type ProjectLeadSubmission,
} from "@/lib/projectRecommendation";
import { validateSubmission } from "@/lib/projectValidation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const leadRecipient = "andrew@cantrelldigital.dev";
const routeLabel = "project-lead";
const resendApiUrl = "https://api.resend.com/emails";
const resendRequestTimeoutMs = 15_000;

function createRequestId() {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function getDebugModeEnabled() {
  return process.env.PROJECT_LEAD_DEBUG === "true";
}

function getServerEnv(name: string) {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

function logInfo(requestId: string, message: string, metadata?: unknown) {
  console.log(`[api/${routeLabel}] [${requestId}] ${message}`, metadata ?? "");
}

function logWarn(requestId: string, message: string, metadata?: unknown) {
  console.warn(`[api/${routeLabel}] [${requestId}] ${message}`, metadata ?? "");
}

function logError(requestId: string, message: string, metadata?: unknown) {
  console.error(
    `[api/${routeLabel}] [${requestId}] ${message}`,
    metadata ?? "",
  );
}

function logDebugState(requestId: string) {
  if (!getDebugModeEnabled()) {
    return;
  }

  logInfo(requestId, "Debug environment check", {
    nodeEnv: process.env.NODE_ENV ?? "unknown",
    resendApiKeyPresent: Boolean(getServerEnv("RESEND_API_KEY")),
    resendFromEmailPresent: Boolean(getServerEnv("RESEND_FROM_EMAIL")),
    runningInAmplify: Boolean(process.env.AWS_APP_ID || process.env.AWS_BRANCH),
  });
}

function safeErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "Unknown error";
}

function formatList(values: string[]) {
  return values.length > 0 ? values.join(", ") : "Not provided";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailText(lead: ProjectLeadSubmission) {
  const recommendation = getProjectRecommendation(lead);

  return `New website lead for Cantrell Digital

Contact
- Name: ${lead.name}
- Business name: ${lead.businessName || "Not provided"}
- Email: ${lead.email}
- Phone: ${lead.phone || "Not provided"}

Recommendation
- Package: ${recommendation.recommendedPackage}
- Reason: ${recommendation.recommendedReason}

Project brief
- Business type: ${lead.businessType}
- Main goal: ${lead.mainGoal}
- Visual direction: ${lead.visualDirection}
- Website scope: ${formatList(lead.websiteScope)}
- Timeline: ${lead.timeline}
- Budget: ${lead.budget}

Additional notes
${lead.additionalNotes || "Not provided"}
`;
}

function buildEmailHtml(lead: ProjectLeadSubmission) {
  const recommendation = getProjectRecommendation(lead);
  const details = [
    ["Name", lead.name],
    ["Business name", lead.businessName || "Not provided"],
    ["Email", lead.email],
    ["Phone", lead.phone || "Not provided"],
    ["Business type", lead.businessType],
    ["Main goal", lead.mainGoal],
    ["Visual direction", lead.visualDirection],
    ["Website scope", formatList(lead.websiteScope)],
    ["Timeline", lead.timeline],
    ["Budget", lead.budget],
  ];

  const detailRows = details
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;border:1px solid #d1d5db;background:#f8fafc;font-weight:600;">${escapeHtml(
            label,
          )}</td>
          <td style="padding:10px 14px;border:1px solid #d1d5db;">${escapeHtml(
            value,
          )}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;background:#f3f4f6;padding:32px;color:#111827;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e5e7eb;">
        <div style="padding:28px 32px;background:linear-gradient(135deg,#0f172a,#1d4ed8);color:#ffffff;">
          <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#bfdbfe;">Cantrell Digital</p>
          <h1 style="margin:0;font-size:28px;line-height:1.2;">New website project lead</h1>
        </div>
        <div style="padding:32px;">
          <div style="margin-bottom:24px;padding:20px;border-radius:18px;background:#eff6ff;border:1px solid #bfdbfe;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#1d4ed8;">Recommended package</p>
            <p style="margin:0;font-size:28px;font-weight:700;color:#0f172a;">${escapeHtml(
              recommendation.recommendedPackage,
            )}</p>
            <p style="margin:12px 0 0;line-height:1.7;color:#334155;">${escapeHtml(
              recommendation.recommendedReason,
            )}</p>
          </div>

          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tbody>${detailRows}</tbody>
          </table>

          <div style="padding:20px;border-radius:18px;background:#0f172a;color:#e5e7eb;">
            <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#93c5fd;">Additional notes</p>
            <p style="margin:0;line-height:1.8;">${escapeHtml(
              lead.additionalNotes || "Not provided",
            ).replaceAll("\n", "<br />")}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export async function GET() {
  console.log(`[api/${routeLabel}] GET route check`);

  return NextResponse.json({
    ok: true,
    route: routeLabel,
    methods: ["GET", "POST"],
  });
}

export async function POST(request: Request) {
  try {
    const requestId = createRequestId();
    const contentType = request.headers.get("content-type") ?? "unknown";

    logInfo(requestId, `${request.method} request received`, { contentType });
    logDebugState(requestId);

    let payload: unknown;

    try {
      if (
        request.headers.get("origin") &&
        request.headers.get("origin") !== new URL(request.url).origin
      ) {
        return NextResponse.json(
          { ok: false, error: "This request could not be accepted." },
          { status: 403 },
        );
      }
      if (Number(request.headers.get("content-length")) > 16_384)
        return NextResponse.json(
          { ok: false, error: "The brief is too long." },
          { status: 413 },
        );
      const reader = request.body?.getReader();
      let text = "";
      let bytes = 0;
      const decoder = new TextDecoder();
      if (reader) {
        while (true) {
          const chunk = await reader.read();
          if (chunk.done) break;
          bytes += chunk.value.length;
          if (bytes > 16_384) {
            await reader.cancel();
            return NextResponse.json(
              { ok: false, error: "The brief is too long." },
              { status: 413 },
            );
          }
          text += decoder.decode(chunk.value, { stream: true });
        }
        text += decoder.decode();
      }
      if (new TextEncoder().encode(text).length > 16_384)
        return NextResponse.json(
          {
            ok: false,
            error: "The brief is too long. Please shorten your notes.",
          },
          { status: 413 },
        );
      payload = JSON.parse(text);
      const abuse = payload as Record<string, unknown>;
      if (typeof abuse.website === "string" && abuse.website)
        return NextResponse.json(
          { ok: false, error: "This request could not be accepted." },
          { status: 400 },
        );
      if (
        typeof abuse.startedAt === "number" &&
        (Date.now() - abuse.startedAt < 1500 || abuse.startedAt > Date.now())
      )
        return NextResponse.json(
          {
            ok: false,
            error: "Please take a moment to review the brief and try again.",
          },
          { status: 429 },
        );
      logInfo(requestId, "Request body parsed successfully");
    } catch (error) {
      logWarn(requestId, "Invalid JSON body", {
        error: safeErrorMessage(error),
      });
      return NextResponse.json(
        {
          ok: false,
          route: routeLabel,
          requestId,
          error: "The request body must be valid JSON.",
        },
        { status: 400 },
      );
    }

    const validated = validateSubmission(payload);

    if (!validated.success) {
      logWarn(requestId, "Validation failed", validated.errors);
      return NextResponse.json(
        {
          ok: false,
          route: routeLabel,
          requestId,
          error: "Please complete the required fields.",
          details: validated.errors,
        },
        { status: 400 },
      );
    }

    if (!allowLeadAttempt(validated.data.email))
      return NextResponse.json(
        {
          ok: false,
          error:
            "Too many attempts. Please wait a few minutes or email the studio.",
        },
        { status: 429, headers: { "Retry-After": "600" } },
      );
    const resendApiKey = getServerEnv("RESEND_API_KEY");

    if (!resendApiKey) {
      logError(requestId, "Missing required server environment variable", {
        missing: ["RESEND_API_KEY"],
      });
      return NextResponse.json(
        {
          ok: false,
          route: routeLabel,
          requestId,
          error:
            "The brief could not be sent right now. Please try again or email the studio.",
        },
        { status: 500 },
      );
    }

    const resendFromEmail =
      getServerEnv("RESEND_FROM_EMAIL") ||
      "Cantrell Digital Leads <onboarding@resend.dev>";
    const lead = validated.data;
    const subject = `New website lead: ${lead.businessName || lead.name}`;
    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      resendRequestTimeoutMs,
    );

    let emailResponse: Response;

    try {
      logInfo(requestId, "Sending email through Resend", {
        to: leadRecipient,
        fromConfigured: Boolean(getServerEnv("RESEND_FROM_EMAIL")),
      });

      emailResponse = await fetch(resendApiUrl, {
        method: "POST",
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: resendFromEmail,
          to: [leadRecipient],
          reply_to: lead.email,
          subject,
          text: buildEmailText(lead),
          html: buildEmailHtml(lead),
        }),
        signal: controller.signal,
      });
    } catch (error) {
      const message =
        error instanceof Error && error.name === "AbortError"
          ? `Resend request timed out after ${resendRequestTimeoutMs}ms.`
          : safeErrorMessage(error);

      logError(requestId, "Failed to reach Resend API", { error: message });

      return NextResponse.json(
        {
          ok: false,
          route: routeLabel,
          requestId,
          error: "Unable to send the email notification.",
        },
        { status: 502 },
      );
    } finally {
      clearTimeout(timeout);
    }

    await emailResponse.body?.cancel();

    if (!emailResponse.ok) {
      logError(requestId, "Email provider rejected request", {
        status: emailResponse.status,
        statusText: emailResponse.statusText,
      });

      return NextResponse.json(
        {
          ok: false,
          route: routeLabel,
          requestId,
          error:
            "The brief could not be sent right now. Please try again or email the studio.",
        },
        { status: 502 },
      );
    }

    logInfo(requestId, "Lead email accepted by provider");

    return NextResponse.json({
      ok: true,
      route: routeLabel,
      requestId,
      message: "Lead submitted successfully.",
    });
  } catch (error) {
    const requestId = createRequestId();

    logError(requestId, "Unhandled route failure", {
      error: safeErrorMessage(error),
    });

    return NextResponse.json(
      {
        ok: false,
        route: routeLabel,
        requestId,
        error: "An unexpected server error occurred while processing the lead.",
      },
      { status: 500 },
    );
  }
}
