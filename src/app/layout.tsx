import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sabfit | Coaching Musculation & Nutrition",
    template: "%s | Sabfit",
  },
  description:
    "Programme musculation, nutrition et suivi personnalise pour des resultats durables avec Sabfit.",
  applicationName: "Sabfit",
  keywords: [
    "coaching sportif",
    "musculation",
    "nutrition",
    "prise de masse",
    "perte de gras",
    "Sabfit",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${manrope.variable} ${sora.variable} font-sans antialiased`}>
        <div className="min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
