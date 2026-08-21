import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientNavBar } from "@/components/ClientNavBar";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noah Kang",
  description: "A digital portfolio and resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        <CustomCursor />
        {/* <ClientNavBar /> */}
        {/* We'll put a subtle background pattern here if desired, otherwise keep it clean */}
        <div className="flex-1 w-full flex flex-col justify-start">
          <div className="w-full flex flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
