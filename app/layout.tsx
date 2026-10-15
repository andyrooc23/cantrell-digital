import type { Metadata } from "next";
import { siteOrigin } from "@/lib/siteMetadata";
import "./globals.css";
import { Manrope, Newsreader } from "next/font/google";
const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const displayFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cantrell Digital — Thoughtful websites for growing businesses",
  metadataBase: new URL(siteOrigin),
  description:
    "Website strategy, design, and development for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${bodyFont.variable} ${displayFont.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
