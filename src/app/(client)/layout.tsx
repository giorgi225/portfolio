import "@/app/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Sen } from "next/font/google";

import LenisProvider from "@/hooks/useLenis";

import Footer from "@/components/layout/footer";
import PageLoader from "@/components/pageLoader";

import type { Metadata } from "next";

// Fonts
const mainFont = Sen({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Metas
export const metadata: Metadata = {
  verification: {
    google: "S0X9213EqQqJc78NFb8uv_07hnoOCONIa0Nw29cRw_Y"
  },
  other: {
    theme: "#b6ef45",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} antialiased`}>
        <PageLoader />
        {children}
        <Footer />
        <Analytics />
        <LenisProvider />
      </body>
    </html>
  );
}
