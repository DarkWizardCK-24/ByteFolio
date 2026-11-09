import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://byte-folio.vercel.app"),
  alternates: { canonical: "/" },
  icons: { icon: "/dev.png", apple: "/dev.png" },
  title: "ByteFolio | Chaitanya Katare",
  description:
    "Portfolio of Chaitanya Katare, known in development as DarkWizard, a full-stack developer working across Flutter, Next.js, FastAPI and the services behind them.",
  keywords: [
    "DarkWizard",
    "Chaitanya Katare",
    "Flutter",
    "Next.js",
    "FastAPI",
    "Full Stack Developer",
    "ByteFolio",
  ],
  authors: [{ name: "Chaitanya Katare (DarkWizard)", url: "https://github.com/DarkWizardCK-24" }],
  openGraph: {
    title: "ByteFolio | Chaitanya Katare",
    description:
      "DarkWizard: Flutter and full-stack developer building cross-platform apps and the services behind them.",
    url: "https://byte-folio.vercel.app/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Chaitanya Katare, Flutter and Full-Stack Developer" }],
    siteName: "ByteFolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
    title: "ByteFolio | Chaitanya Katare",
    description:
      "DarkWizard: Flutter and full-stack developer building cross-platform apps and the services behind them.",
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
