import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./layout-wrapper";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Bagus Arya Portfolio",
  icons: {
    icon: "/a.svg",
  },
  keywords: [
    "Bagus Arya",
    "Bagus Arya Portofolio",
    "Gede Bagus Arya",
    "bagusarya.devportfolio",
  ],
  openGraph: {
    title: "bagusarya.devportfolio",
    description:
      "Official portfolio of Bagus Arya, a Frontend Web Developer from Denpasar, Bali. Explore projects, skills, and professional experiences in web development at bagusarya.devportfolio.",
    url: "https://fullstack-developer-bagusarya.vercel.app/",
    siteName: "Frontend-Developer",
    images: [
      {
        url: "https://fullstack-developer-bagusarya.vercel.app/a.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "I Gede Bagus Arya Negara",
          jobTitle: "Frontend Web Developer",
          url: "https://fullstack-developer-bagusarya.vercel.app/",
          sameAs: [
            "https://github.com/aryanegara",
            "https://www.linkedin.com/in/aryanegara",
          ],
        }),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
