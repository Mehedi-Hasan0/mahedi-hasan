import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const antiqueOlive = localFont({
  src: [
    {
      path: "../public/fonts/aniqueOlive/antique-olive-bold.ttf",
      style: "normal",
      weight: "800",
    },
  ],
  variable: "--font-antique-olive",
});

const matter = localFont({
  src: [
    {
      path: "../public/fonts/matter/Matter-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/matter/Matter-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/fonts/matter/Matter-SemiBold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../public/fonts/matter/Matter-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../public/fonts/matter/Matter-Heavy.ttf",
      style: "normal",
      weight: "800",
    },
  ],
  variable: "--font-matter",
});

export const metadata: Metadata = {
  title: "Mahedi Hasan",
  description: "Mahedi Hasan's portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${matter.variable} ${antiqueOlive.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
