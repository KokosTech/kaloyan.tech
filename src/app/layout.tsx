import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/partials/navbar";
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
      <body>
        <Navbar />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
