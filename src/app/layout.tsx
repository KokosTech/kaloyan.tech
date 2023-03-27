import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata = {
  title: "Kaloyan Doychinov | Porfolio",
  description:
    "Porfolio of Kaloyan Doychinov, a software developer and a student at TUES",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
