import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kelompok3-sosbud.netlify.app"),
  title: "Kelompok 3 SOSBUD — Project Hub",
  description: "Dashboard koordinasi tugas kelompok 3 Sosbud - Peran Etika dan Norma. Hubungan Sosial, Integrasi Masyarakat, dan Resolusi Konflik.",
  openGraph: {
    title: "Kelompok 3 SOSBUD — Project Hub",
    description: "Dashboard integrasi tugas kelompok: Peran Etika, Moral, Akhlak, dan Norma untuk meredam pertentangan sosial.",
    url: "https://kelompok3-sosbud.netlify.app", // Adjust if deployed elsewhere
    siteName: "SOSBUD KELOMPOK 3",
    images: [
      {
        url: "https://kelompok3-sosbud.netlify.app/images/kelompok3sosbud.png",
        width: 1920,
        height: 1080,
        alt: "Cover Presentation Kelompok 3 SOSBUD",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelompok 3 SOSBUD — Project Hub",
    description: "Dashboard koordinasi Kelompok 3 Sosbud - Integritas Masyarakat.",
    images: ["https://kelompok3-sosbud.netlify.app/images/kelompok3sosbud.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="font-inter min-h-full flex flex-col">{children}</body>
    </html>
  );
}
