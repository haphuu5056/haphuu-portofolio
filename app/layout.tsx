import type React from "react";
import type { Metadata } from "next";
import { Delius } from "next/font/google";
import "./globals.css";

const delius = Delius({
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "Hafsa Abdullahi | Web Developer",
  description:
    "Portfolio of Hafsa Abdullahi, web developer specializing in React, Next.js, and TypeScript",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${delius.className}`}>
      <body>{children}</body>
    </html>
  );
}
