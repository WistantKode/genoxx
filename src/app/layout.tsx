import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const calSans = localFont({
  src: "../../node_modules/cal-sans/fonts/webfonts/CalSans-SemiBold.woff2",
  variable: "--font-cal",
});

export const metadata: Metadata = {
  title: "genoxx",
  description: "Just a high-conversion SaaS landing page template built with React/Nextjs – optimized for speed, SEO, and modern UX/UI trends. 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(inter.variable, calSans.variable, "font-sans antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
