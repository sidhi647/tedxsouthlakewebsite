import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "TEDxSouthlake 2026: Unlearn";
const description =
  "TEDxSouthlake 2026: Unlearn. Let Go of What Limits You. November 8, 2026 at The Westin Dallas Southlake. Ideas worth spreading, from students to the C-suite.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tedxsouthlake.com"),
  title: {
    default: title,
    template: "%s | TEDxSouthlake",
  },
  description,
  openGraph: {
    title: "TEDxSouthlake",
    description,
    siteName: "TEDxSouthlake",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEDxSouthlake",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
