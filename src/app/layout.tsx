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
  title: "Samay Sarathi — AI-Powered Emergency Response",
  description:
    "India's intelligent emergency coordination system. Connecting ambulances, hospitals, and traffic police in real time to save lives.",
  keywords: ["emergency response", "ambulance", "hospital", "India", "Samay Sarathi"],
  openGraph: {
    title: "Samay Sarathi — समय सारथी",
    description: "AI-Powered National Emergency Coordination System",
    url: "https://samaysarathi.in",
    siteName: "Samay Sarathi",
    type: "website",
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
