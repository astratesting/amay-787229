import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amay — AI Wellness for Remote Workers",
  description:
    "Amay helps remote workers build healthier habits, track their mood, and prevent burnout — all powered by AI.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${manrope.variable} ${sourceSans.variable}`}>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
