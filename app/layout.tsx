import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PixelBlock Resume",
  description: "Create and manage your professional resume effortlessly with PixelBlock Resume. Perfect for job seekers and professionals.",
  keywords: "resume, resume builder, CV, job application, PixelBlock Resume, create resume, online resume builder",
  authors: [{ name: "Milap Dave" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "PixelBlock Resume",
    description: "Create and manage your professional resume effortlessly with PixelBlock Resume.",
    url: "https://milapdave.com", // Replace with your actual URL
    siteName: "PixelBlock Resume",
    images: [
      {
        url: "https://milap.com/og-image.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "PixelBlock Resume",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelBlock Resume",
    description: "Create and manage your professional resume effortlessly with PixelBlock Resume.",
    images: "https://milap.com/twitter-image.jpg", // Replace with your actual image URL
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icons/icon-32x32.png', // Ensure this path matches your generated icon path
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}