import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luqmanbintangjaya.com"),
  title: {
    default: "Maklon Sandal Sidoarjo | Luqman Bintang Jaya",
    template: "%s | Luqman Bintang Jaya",
  },
  description:
    "Spesialis maklon sandal custom di Sidoarjo sejak 1987. Harga pabrik, custom desain bebas, fast turnaround. Melayani seluruh Indonesia. Konsultasi gratis!",
  keywords: [
    "maklon sandal sidoarjo",
    "jasa maklon sandal custom sidoarjo",
    "pabrik sandal custom sidoarjo",
    "maklon sandal surabaya",
    "produsen sandal merek sendiri sidoarjo",
    "sandal private label",
    "maklon sandal indonesia",
    "maklon sepatu sidoarjo",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://luqmanbintangjaya.com",
    siteName: "Luqman Bintang Jaya",
    title: "Maklon Sandal Sidoarjo | Luqman Bintang Jaya",
    description:
      "Spesialis maklon sandal custom di Sidoarjo sejak 1987. Harga pabrik, custom desain bebas, fast turnaround. Melayani seluruh Indonesia.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "LBJ Footwear Industries" }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Luqman Bintang Jaya",
  alternateName: "LBJ Footwear Industries",
  description:
    "Spesialis maklon sandal dan sepatu custom di Sidoarjo sejak 1987. Harga langsung dari pabrik.",
  url: "https://luqmanbintangjaya.com",
  telephone: "+62-812-3391-3988",
  foundingDate: "1987",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Tropodo 1 No.287, Tropodo Kulon, Tropodo",
    addressLocality: "Kec. Waru, Kabupaten Sidoarjo",
    addressRegion: "Jawa Timur",
    postalCode: "61256",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.3719,
    longitude: 112.7283,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: ["https://wa.me/6281233913988"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-body antialiased bg-white text-slate-800">
        <Navbar />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
