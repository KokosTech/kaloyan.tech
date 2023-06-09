import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";

export const metadata = {
  title: "",
  description: "",
  
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
