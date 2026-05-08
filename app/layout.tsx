import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EURO INTERNATIONAL | Leather Goods Catalog",
  description:
    "A4 leather goods catalog for EURO INTERNATIONAL featuring bags, wallets, belts, shoes, jackets, gloves, company introduction, compliance, mission, and contact pages.",
};

export const viewport: Viewport = {
  width: 794,
  initialScale: 1,
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
