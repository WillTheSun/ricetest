import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fun Rice Purity Test Challenge - How Wild Are You?",
  description: "Take the Rice Purity Test and find out just how wild and fun your experiences have been! Share and compare with friends!",
  keywords: "fun test, teen challenges, purity test, social quiz, Rice Purity Test, youth trends, viral challenge, social fun",
  openGraph: {
    title: "Fun Rice Purity Test Challenge - How Wild Are You?",
    description: "Are you ready to discover just how wild and fun your experiences have been? Take the Rice Purity Test, share with friends, and compare your scores!",
    images: [
      {
        url: "/og-image.jpg", // Ensure you create and add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Fun Rice Purity Test Challenge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rice Purity Challenge - How Wild Are You?",
    description: "Take the Rice Purity Test and find out how wild your experiences have been! Challenge your friends and share your results!",
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}