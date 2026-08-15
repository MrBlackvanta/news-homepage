import Footer from "@/components/layout/footer";
import SiteHeader from "@/components/layout/site-header";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const title = "W. — News homepage";
const description =
  "A news website homepage with a featured Web 3.0 story, a New sidebar and a ranked top-articles list — a Frontend Mentor challenge built with Next.js, TypeScript and Tailwind CSS.";
const siteUrl = "https://news-homepage.abdelrhman-ahmed8881.workers.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffdfa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
