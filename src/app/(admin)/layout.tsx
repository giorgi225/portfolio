import "@/app/globals.css";

import { Sen } from "next/font/google";

import Aside from "@/components/admin/layout/aside";
import PageLoader from "@/components/pageLoader";

import type { Metadata } from "next";

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
        <div className="w-full flex h-screen">
          <Aside />
          <div className="flex-1 h-full flex flex-col gap-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
