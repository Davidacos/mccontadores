import AnimatedSection from "@/components/global/AnimatedSection";
import MarketingBanner from "@/components/global/MarketingBanner";
import WhyChooseUs from "@/components/pages/home/components/WhyChooseUs";
import ClientLogos from "@/components/pages/home/components/ClientLogos";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCheck, FaSearchDollar, FaChartPie, FaFileInvoiceDollar, FaBuilding, FaArrowLeft } from "react-icons/fa";
import AnimatedUnderline from "@/components/global/AnimatedUnderline";

const serviceData = {
  "contabilidad": {
    titlePrefix: "Servicios de ",
    titleHighlight: "Contabilidad",
    subtitle: "Precisión y Cumplimiento Normativo",
    icon: FaChartPie,
    description: "Aseguramos la correcta preparación y presentación de sus estados financieros, gestionando la contabilidad bajo los más altos estándares para que pueda tomar decisiones basadas en información precisa y oportuna.",
    benefits: [
      "Preparación y presentación de estados financieros.",
      "Contabilidad financiera integral y actualizada.",
      "Contabilidad de costos detallada para optimizar recursos.",
      "Análisis financiero profundo para respaldar la toma de decisiones gerenciales."
    ]
  },
  "impuestos": {
    titlePrefix: "Servicios de ",
    titleHighlight: "Impuestos",
    subtitle: "Planificación Fiscal Estratégica",
    icon: FaFileInvoiceDollar,
    description: "Minimizamos el impacto fiscal y aseguramos el cumplimiento de todas las obligaciones tributarias mediante una planificación meticulosa y representación experta ante las autoridades fiscales.",
    benefits: [
      "Elaboración y presentación de declaraciones de impuestos nacionales y territoriales.",
      "Planificación fiscal preventiva para optimizar la carga tributaria.",
      "Representación profesional ante la autoridad fiscal (DIAN y secretarías de hacienda).",
      "Actualización constante sobre normatividad tributaria vigente."
    ]
  },
  "asesoria": {
    titlePrefix: "Servicios de ",
    titleHighlight: "Asesoría",
    subtitle: "Consultoría y Visión de Negocio",
    icon: FaSearchDollar,
    description: "Impulsamos el crecimiento de su empresa mediante asesoría financiera especializada, ayudándole a estructurar estrategias sólidas y mitigar riesgos operativos y de mercado.",
    benefits: [
      "Asesoría financiera integral para el manejo de recursos e inversiones.",
      "Planificación estratégica a corto, mediano y largo plazo.",
      "Análisis exhaustivo de riesgos financieros y operativos.",
      "Asesoría completa en la constitución y estructuración de nuevas empresas."
    ]
  },
  "outsourcing": {
    titlePrefix: "Servicios de ",
    titleHighlight: "Outsourcing",
    subtitle: "Gestión Administrativa y Operativa",
    icon: FaBuilding,
    description: "Delegue las cargas operativas en nuestro equipo de expertos. Nos encargamos de su contabilidad, nómina y tesorería para que usted pueda enfocarse exclusivamente en el núcleo (core) de su negocio.",
    benefits: [
      "Contabilidad outsourcing con procesamiento continuo de información.",
      "Administración integral de nómina, seguridad social y prestaciones.",
      "Gestión de tesorería, flujo de caja y pagos a proveedores.",
      "Informes periódicos de gestión y soporte administrativo continuo."
    ]
  }
};

type Params = Promise<{ slug: string }>;

export default async function ServicePage(props: { params: Params }) {
  const params = await props.params;
  const data = serviceData[params.slug as keyof typeof serviceData];

  if (!data) {
    notFound();
  }

  const IconComponent = data.icon;

  return (
    <div className="flex flex-col w-full bg-color-gray-light min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-color-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] opacity-50 pointer-events-none from-color-gold/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Link href="/portafolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-8 hover:text-color-gold transition-colors text-gray-400">
            <FaArrowLeft /> Volver al Portafolio
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <AnimatedSection className="md:w-3/5">
              <div className="inline-block px-4 py-1 border rounded-full mb-6 shadow-sm border-color-gold/30 bg-color-gold/10 text-color-gold">
                <span className="font-bold text-xs tracking-widest uppercase">{data.subtitle}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {data.titlePrefix} <span className="text-color-gold relative inline-block">
                  {data.titleHighlight}
                  <AnimatedUnderline />
                </span>
              </h1>
              <p className="text-xl leading-relaxed text-gray-300">
                {data.description}
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="md:w-2/5 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-2xl relative bg-color-navy-light shadow-black/50 border border-white/10">
                {/* Glowing ring behind icon */}
                <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-color-gold"></div>
                <IconComponent className="text-[120px] relative z-10 text-color-gold" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Details & Benefits Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-color-navy mb-12 text-center">
              Alcance del <span className="text-color-gold relative inline-block">
                Servicio
                <AnimatedUnderline />
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {data.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="mt-1 mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-color-gray-light text-color-navy group-hover:bg-color-gold group-hover:text-white transition-colors duration-300">
                    <FaCheck className="text-sm" />
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed group-hover:text-color-navy transition-colors duration-300">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Client Logos Section */}
      <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center mb-8">
          <h2 className="text-3xl font-bold text-color-navy mb-4">
            Confianza <span className="text-color-gold">Empresarial</span>
          </h2>
          <p className="text-gray-600">
            Únase a las empresas que han optimizado su área financiera con nosotros.
          </p>
        </div>
        <ClientLogos />
      </section>

      {/* Marketing CTA */}
      <MarketingBanner />
    </div>
  );
}
