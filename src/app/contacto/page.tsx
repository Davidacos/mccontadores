import type { Metadata } from "next";
import ContactoClient from "@/components/pages/contacto/ContactoClient";

export const metadata: Metadata = {
  title: "Contacto y Cotizaciones | Contadores Públicos Bogotá y Soacha",
  description: "Póngase en contacto con MC Contadores COL S.A.S. Cotice su outsourcing de contabilidad, nómina y revisoría fiscal para su empresa en Bogotá, Soacha o Colombia.",
  alternates: {
    canonical: "https://mccontadorescol.com/contacto",
  },
};

export default function Contacto() {
  return <ContactoClient />;
}
