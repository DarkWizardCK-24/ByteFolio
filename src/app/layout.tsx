import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
      "Flutter Enthusiast · Full-Stack Developer · Web Developer · Database Expert.",
    url: "https://dev-folio-ten-rho.vercel.app/",
    siteName: "ByteFolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteFolio | Chaitanya Katare",
    description:
      "Flutter Enthusiast · Full-Stack Developer · Web Developer · Database Expert.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
