import "@/app/globals.css";

import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";

import LenisProvider from "@/hooks/useLenis";

import Footer from "@/components/layout/footer";
import PageLoader from "@/components/pageLoader";

import type { Metadata } from "next";
import Menu from "@/components/layout/manu";

const mainFont = localFont({
  src: [
    {
      path: "../../../public/fonts/Aeonik-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Aeonik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Aeonik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Aeonik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Aeonik-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

// Metas
export const metadata: Metadata = {
  verification: {
    google: "S0X9213EqQqJc78NFb8uv_07hnoOCONIa0Nw29cRw_Y",
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
        {/* <PageLoader /> */}
        {children}
        <Menu />
        <Footer />
        <Analytics />
        <LenisProvider />
      </body>
    </html>
  );
}
