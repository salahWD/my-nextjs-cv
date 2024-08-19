import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

import { Navigation } from "@/app/components/nav";

export const metadata: Metadata = {
  // metadataBase: new URL('https://salahbakhash.com'),
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: "salahbakhsh.com",
    template: "%s | salahbakhsh.com",
  },
  description: "Full-Stack Web Developer & Freelancer",
  openGraph: {
    title: "salahbakhsh.com",
    description:
      "Full-Stack Web Developer & Freelancer",
    url: "https://salahbakhsh.com",
    siteName: "salahbakhsh.com",
    images: [
      {
        url: "https://salahbakhsh.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "salahbakhash",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ") + " scroll-smooth"}>
      <head>
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <Navigation customClass="animate-fade-in" />
        {children}
      </body>
    </html>
  );
}
