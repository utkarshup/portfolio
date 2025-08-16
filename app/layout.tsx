import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Utkarsh Upadhyay — Software Engineer",
    template: "%s | Utkarsh Upadhyay"
  },
  description:
    "Portfolio of Utkarsh Upadhyay — Software Engineer (2+ years professional + 6-month internship). Python, Shell, PowerShell, BigFix. Open to roles & freelance.",
  openGraph: {
    title: "Utkarsh Upadhyay — Software Engineer",
    description:
      "Animated, responsive portfolio showcasing technical expertise and professional journey.",
    url: "https://example.com",
    siteName: "Utkarsh Upadhyay",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Upadhyay — Software Engineer",
    description:
      "Animated, responsive portfolio showcasing technical expertise and professional journey."
  },
  alternates: {
    canonical: "/"
  },
  keywords: [
    "Utkarsh Upadhyay",
    "Software Engineer",
    "Python",
    "Shell",
    "PowerShell",
    "BigFix",
    "Portfolio",
    "Next.js",
    "TailwindCSS",
    "Framer Motion"
  ],
  robots: "index, follow",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export const viewport: Viewport = {
  themeColor: [{ color: "#2563eb" }, { color: "#0b1220", media: "(prefers-color-scheme: dark)" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-[calc(100dvh-64px)]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
