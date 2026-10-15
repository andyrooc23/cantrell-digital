import type { Metadata } from "next";

export const siteOrigin = "https://www.cantrelldigital.dev";

export function canonicalFor(path: string): Pick<Metadata, "alternates"> {
  return { alternates: { canonical: new URL(path, siteOrigin).toString() } };
}
