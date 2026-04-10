import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cantrell Digital - Modern Websites for Growing Businesses",
  description: "Professional website design and development services. Build high-performance, conversion-focused websites that drive real business results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
