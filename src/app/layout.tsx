import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import WhatsAppButton from "@/components/global/WhatsAppButton";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mccontadorescol.com"),
  title: {
    default: "MC Contadores COL S.A.S. | Firma de Contabilidad y Auditoría en Colombia",
    template: "%s | MC Contadores COL S.A.S."
  },
  description: "Firma de contadores públicos en Bogotá y Soacha. Especialistas en outsourcing contable, nómina electrónica, revisoría fiscal, auditoría y planeación tributaria DIAN.",
  keywords: [
    "contadores colombia", "contadores bogota", "contadores soacha", 
    "outsourcing contable", "asesoria tributaria", "declaracion de renta", 
    "revisoria fiscal bogota", "auditoria contable", "nomina electronica", 
    "constitucion de empresas", "BPO contable", "DIAN", "revisores fiscales"
  ],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "MC Contadores COL S.A.S. | Firma de Contadores Públicos",
    description: "Outsourcing contable, nómina, revisoría fiscal y auditoría en Bogotá, Soacha y toda Colombia. Asesoría estratégica para el crecimiento de su empresa.",
    url: "https://mccontadorescol.com",
    siteName: "MC Contadores COL S.A.S.",
    images: [
      {
        url: "https://mccontadorescol.com/images/oficina_mccontadores.jpg",
        width: 1200,
        height: 630,
        alt: "Oficina Principal MC Contadores COL S.A.S."
      }
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MC Contadores COL S.A.S. | Asesoría Contable y Tributaria",
    description: "Firma líder en auditoría y consultoría contable, tributaria y fiscal en Colombia.",
    images: ["https://mccontadorescol.com/images/oficina_mccontadores.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "MC Contadores COL S.A.S.",
      "image": "https://mccontadorescol.com/images/logo.png",
      "@id": "https://mccontadorescol.com/#organization",
      "url": "https://mccontadorescol.com",
      "telephone": "+573214024276",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Atencion en Bogota, Soacha y nivel nacional",
        "addressLocality": "Bogota",
        "addressRegion": "Cundinamarca",
        "postalCode": "110111",
        "addressCountry": "CO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 4.60971,
        "longitude": -74.08175
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Bogota"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Soacha"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Colombia"
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://facebook.com/McContadorescol",
        "https://instagram.com/McContadorescol"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MC Contadores COL S.A.S.",
      "url": "https://mccontadorescol.com",
      "logo": "https://mccontadorescol.com/images/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+573214024276",
        "contactType": "customer service",
        "areaServed": "CO",
        "availableLanguage": "Spanish"
      }
    }
  ];

  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
