import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

// Archivo carries the headings — an industrial grotesque with real weight at
// large sizes, where geometric faces go soft. Inter does the reading work.
const display = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteFolio | Chaitanya Katare",
  description:
    "Portfolio of Chaitanya Katare — Flutter Enthusiast, Full-Stack Developer, Web Developer & Database Expert.",
  keywords: ["Flutter", "React", "Next.js", "Full Stack Developer", "Chaitanya Katare", "ByteFolio"],
  authors: [{ name: "Chaitanya Katare", url: "https://github.com/DarkWizardCK-24" }],
  openGraph: {
    title: "ByteFolio | Chaitanya Katare",
    description:
      "Flutter and full-stack developer building cross-platform apps and the services behind them.",
    url: "https://dev-folio-ten-rho.vercel.app/",
    siteName: "ByteFolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteFolio | Chaitanya Katare",
    description:
      "Flutter and full-stack developer building cross-platform apps and the services behind them.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
