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
  title: "Kelompok 3 SOSBUD — Project Hub",
  description: "Dashboard koordinasi tugas kelompok 3 Sosbud - Peran Etika dan Norma. Hubungan Sosial, Integrasi Masyarakat, dan Resolusi Konflik.",
  openGraph: {
    title: "Kelompok 3 SOSBUD — Project Hub",
    description: "Dashboard integrasi tugas kelompok: Peran Etika, Moral, Akhlak, dan Norma untuk meredam pertentangan sosial.",
    url: "https://kelompok3sosbud.netlify.app", // Adjust if deployed elsewhere
    siteName: "SOSBUD KELOMPOK 3",
    images: [
      {
        url: "/SLIDES%20YANG%20BARU%20-%20(KELOMPOK%203)%20PERAN%20ETIKA,%20MORAL,%20AKHLAK%20DAN%20NORMA%20DALAM%20MEREDAM%20PERTENTANGAN%20SOSIAL%20SEBAGAI%20UPAYA%20INTEGRASI%20MASYARAKAT.png",
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
    images: ["/SLIDES%20YANG%20BARU%20-%20(KELOMPOK%203)%20PERAN%20ETIKA,%20MORAL,%20AKHLAK%20DAN%20NORMA%20DALAM%20MEREDAM%20PERTENTANGAN%20SOSIAL%20SEBAGAI%20UPAYA%20INTEGRASI%20MASYARAKAT.png"],
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
