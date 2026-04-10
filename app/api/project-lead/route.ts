import { NextResponse } from 'next/server';

import {
  BUDGET_OPTIONS,
  BUSINESS_TYPE_OPTIONS,
  MAIN_GOAL_OPTIONS,
  TIMELINE_OPTIONS,
  VISUAL_DIRECTION_OPTIONS,
  WEBSITE_SCOPE_OPTIONS,
  getProjectRecommendation,
  isOptionInList,
  type ProjectLeadSubmission,
} from '@/lib/projectRecommendation';

const leadRecipient = 'andrew@cantrelldigital.dev';
const routeLabel = 'project-lead';

function normalizeString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function formatList(values: string[]) {
  return values.length > 0 ? values.join(', ') : 'Not provided';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateSubmission(payload: unknown):
  | { success: true; data: ProjectLeadSubmission }
  | { success: false; errors: string[] } {
  if (!payload || typeof payload !== 'object') {
    return { success: false, errors: ['Invalid request body.'] };
  }

  const raw = payload as Record<string, unknown>;
  const businessType = normalizeString(raw.businessType);
  const mainGoal = normalizeString(raw.mainGoal);
  const visualDirection = normalizeString(raw.visualDirection);
  const timeline = normalizeString(raw.timeline);
  const budget = normalizeString(raw.budget);
  const name = normalizeString(raw.name);
  const businessName = normalizeString(raw.businessName);
  const email = normalizeString(raw.email);
  const phone = normalizeString(raw.phone);
  const additionalNotes = normalizeString(raw.additionalNotes);
  const websiteScopeRaw = Array.isArray(raw.websiteScope) ? raw.websiteScope : [];
  const websiteScope = websiteScopeRaw
    .filter((value): value is string => typeof value === 'string')
    .map((value) => value.trim())
    .filter((value) => isOptionInList(value, WEBSITE_SCOPE_OPTIONS));

  const errors: string[] = [];

  if (!isOptionInList(businessType, BUSINESS_TYPE_OPTIONS)) {
    errors.push('Business type is required.');
  }

  if (!isOptionInList(mainGoal, MAIN_GOAL_OPTIONS)) {
    errors.push('Main goal is required.');
  }

  if (!isOptionInList(visualDirection, VISUAL_DIRECTION_OPTIONS)) {
    errors.push('Visual direction is required.');
  }

  if (!isOptionInList(timeline, TIMELINE_OPTIONS)) {
    errors.push('Timeline is required.');
  }

  if (!isOptionInList(budget, BUDGET_OPTIONS)) {
    errors.push('Budget is required.');
  }

  if (websiteScope.length === 0) {
    errors.push('At least one website scope item is required.');
  }

  if (!name) {
    errors.push('Name is required.');
  }

  if (!email) {
    errors.push('Email is required.');
  } else if (!isValidEmail(email)) {
    errors.push('Email must be valid.');
  }

  if (errors.length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      businessType: businessType as ProjectLeadSubmission['businessType'],
      mainGoal: mainGoal as ProjectLeadSubmission['mainGoal'],
      visualDirection:
        visualDirection as ProjectLeadSubmission['visualDirection'],
      websiteScope,
      timeline: timeline as ProjectLeadSubmission['timeline'],
      budget: budget as ProjectLeadSubmission['budget'],
      name,
      businessName,
      email,
      phone,
      additionalNotes,
    },
  };
}

function buildEmailText(lead: ProjectLeadSubmission) {
  const recommendation = getProjectRecommendation(lead);

  return `New website lead for Cantrell Digital

Contact
- Name: ${lead.name}
- Business name: ${lead.businessName || 'Not provided'}
- Email: ${lead.email}
- Phone: ${lead.phone || 'Not provided'}

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
${lead.additionalNotes || 'Not provided'}
`;
}

function buildEmailHtml(lead: ProjectLeadSubmission) {
  const recommendation = getProjectRecommendation(lead);
  const details = [
    ['Name', lead.name],
    ['Business name', lead.businessName || 'Not provided'],
    ['Email', lead.email],
    ['Phone', lead.phone || 'Not provided'],
    ['Business type', lead.businessType],
    ['Main goal', lead.mainGoal],
    ['Visual direction', lead.visualDirection],
    ['Website scope', formatList(lead.websiteScope)],
    ['Timeline', lead.timeline],
    ['Budget', lead.budget],
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
    .join('');

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
              lead.additionalNotes || 'Not provided',
            ).replaceAll('\n', '<br />')}</p>
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
    methods: ['GET', 'POST'],
  });
}

export async function POST(request: Request) {
  console.log(`[api/${routeLabel}] ${request.method} request received`);

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    console.warn(`[api/${routeLabel}] Invalid JSON body`);
    return NextResponse.json(
      {
        ok: false,
        route: routeLabel,
        error: 'The request body must be valid JSON.',
      },
      { status: 400 },
    );
  }

  const validated = validateSubmission(payload);

  if (!validated.success) {
    console.warn(`[api/${routeLabel}] Validation failed`, validated.errors);
    return NextResponse.json(
      {
        ok: false,
        route: routeLabel,
        error: 'Please complete the required fields.',
        details: validated.errors,
      },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn(`[api/${routeLabel}] Missing RESEND_API_KEY`);
    return NextResponse.json(
      {
        ok: false,
        route: routeLabel,
        error:
          'Email delivery is not configured. Add RESEND_API_KEY to enable submissions.',
      },
      { status: 500 },
    );
  }

  const lead = validated.data;
  const subject = `New website lead: ${lead.businessName || lead.name}`;
  const emailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from:
        process.env.RESEND_FROM_EMAIL ??
        'Cantrell Digital Leads <onboarding@resend.dev>',
      to: [leadRecipient],
      reply_to: lead.email,
      subject,
      text: buildEmailText(lead),
      html: buildEmailHtml(lead),
    }),
  });

  if (!emailResponse.ok) {
    const errorText = await emailResponse.text();
    console.error(`[api/${routeLabel}] Email provider rejected request`, errorText);

    return NextResponse.json(
      {
        ok: false,
        route: routeLabel,
        error: 'The lead was validated, but the email provider rejected it.',
        providerMessage: errorText,
      },
      { status: 502 },
    );
  }

  console.log(`[api/${routeLabel}] Lead email accepted by provider`);

  return NextResponse.json({ ok: true, route: routeLabel });
}
