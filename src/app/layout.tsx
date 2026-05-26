import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JM Web – Web Developer & IT Specialist",
  description: "JM Web provides reliable, affordable web solutions — from new websites to redesigns, e‑commerce, SEO and ongoing support Australia‑wide.",
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/icons/jmweb-logo.png",
  },
  alternates: {
    canonical: "https://jmweb.com.au/",
  },
  openGraph: {
    title: "JM Web – Web Developer & IT Specialist",
    description:
      "Reliable and affordable website solutions across Australia.",
    url: "https://jmweb.com.au/",
    siteName: "JM Web",
    images: ["/og-image.jpg"], // optional but recommended
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}