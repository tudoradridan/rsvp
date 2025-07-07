"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { Allura, Oswald } from "next/font/google";

import Spinner from "@/app/_components/Spinner";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="ro">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${allura.variable} ${oswald.variable} antialiased`}
        style={{ background: "#f3f0eb" }}
      >
        {loading ? <Spinner /> : children}
        <Toaster />
      </body>
    </html>
  );
}
