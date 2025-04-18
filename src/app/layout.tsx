// Next
import type { Metadata } from "next";
import { Sen } from "next/font/google";
// Styles
import "@/app/globals.css";
import Footer from "@/components/layout/footer";
// Third-party
import { Analytics } from "@vercel/analytics/react";
import LenisProvider from "@/hooks/useLenis";
import PageLoader from "@/components/pageLoader";

// Fonts
const mainFont = Sen({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Metas
export const metadata: Metadata = {
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
