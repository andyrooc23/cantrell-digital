import { createHash } from "node:crypto";
// Best-effort protection within each server instance. No raw addresses are retained.
const attempts = new Map<string, { count: number; expires: number }>();
export function allowLeadAttempt(email: string, now = Date.now()) {
  for (const [key, value] of attempts)
    if (value.expires <= now) attempts.delete(key);
  const key = createHash("sha256")
    .update(email.trim().toLowerCase())
    .digest("hex");
  const entry = attempts.get(key);
  if (entry && entry.count >= 5) return false;
  if (!entry && attempts.size >= 1000) return false;
  attempts.set(key, {
    count: (entry?.count ?? 0) + 1,
    expires: entry?.expires ?? now + 10 * 60 * 1000,
  });
  return true;
}
