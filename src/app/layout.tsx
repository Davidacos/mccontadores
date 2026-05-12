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
  title: "MC Contadores COL S.A.S.",
  description: "Firma especializada en servicios de auditoría y consultoría contable, tributaria y financiera.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
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
