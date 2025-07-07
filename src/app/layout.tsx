import Navbar from "@/partials/navbar";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: {
    default: "Kaloyan Doychinov",
    template: "%s | Kaloyan Doychinov",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? "https://kaloyan.tech"),
  keywords: [
    "kaloyanx",
    "@kaloyanx",
    "Kaloyan Stefanov Doychinov",
    "Kaloyan Doychinov",
    "Kaloyan",
    "Doychinov",
    "Калоян",
    "Дойчинов",
    "Калоян Дойчинов",
    "Калоян Стефанов Дойчинов",
    "ТУЕС",
    "АУБ",
    "АУБГ",
    "ТУЕС АУБГ",
    "ТУЕС АУБГ Калоян Дойчинов",
    "TUES",
    "ELSYS",
    "AUBG",
    "American University in Bulgaria",
    "Технологично училище Електронни системи",
    "Kaloyan Doychinov Portfolio",
    "Kaloyan Doychinov Projects",
    "Kaloyan Doychinov Gallery",
    "Kaloyan Doychinov Dev Projects",
    "Kaloyan Doychinov Gallery Projects",
    "Kaloyan Doychinov Dev Projects Gallery",
  ],
  description: "Portfolio website of Kaloyan Doychinov",
  authors: [
    {
      name: "Kaloyan Doychinov",
      url: "https://kaloyan.tech",
      email: "kaloyan@kaloyan.tech",
    },
  ],
  robots: "index, follow",
  creator: "Kaloyan Doychinov",
  twitter: {
    site: "https://kaloyan.tech",
    card: "summary_large_image",
    creator: "@kaloyanx",
    title: "Kaloyan Doychinov",
    description: "Portfolio website of Kaloyan Doychinov",
    // images: '/og-image.png',
  },
  openGraph: {
    determiner: "auto",
    title: {
      default: "Kaloyan Doychinov",
      template: "%s | Kaloyan Doychinov",
    },
    description: "Portfolio website of Kaloyan Doychinov",
    type: "website",
    siteUrl: "https://kaloyan.tech",
    emails: ["kaloyan@kaloyan.tech"],
    siteName: "Kaloyan Doychinov",
    locale: "en_US",
    alternateLocale: "bg_BG",
    // images: ['/og-image.png'],
    url: "https://kaloyan.tech",
  },
};

export const viewport = {
  themeColor: [
    {
      color: "#161616",
      media: "(prefers-color-scheme: light)",
    },
    {
      color: "#161616",
      media: "(prefers-color-scheme: dark)",
    },
  ],
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
