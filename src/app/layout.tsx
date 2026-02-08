import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"; // 👈 add this

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bigesh Poudel | AI Engineer & FinTech Systems",
  description:
    "AI Engineer building FinTech systems, trading engines, and real world asset tokenization platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />
        <main>{children}</main>

        <footer className="mt-20 py-6 text-center text-sm text-gray-400 border-t border-gray-800">
          Thanks for visiting! You made it to the end 👀
        </footer>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
