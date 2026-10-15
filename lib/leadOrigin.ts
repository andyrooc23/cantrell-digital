import { siteOrigin } from "./siteMetadata";

// Amplify can expose an internal host/protocol in request.url. Browser origins
// must be checked against the public domains, not that upstream URL or forwarded headers.
export function isAllowedLeadOrigin(
  request: Request,
  environment = process.env.NODE_ENV,
) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const publicOrigin = new URL(siteOrigin);
  const allowed = new Set([publicOrigin.origin]);
  const apexOrigin = new URL(publicOrigin);
  apexOrigin.hostname = apexOrigin.hostname.replace(/^www\./, "");
  allowed.add(apexOrigin.origin);

  if (environment !== "production") allowed.add(new URL(request.url).origin);
  return allowed.has(origin);
}
