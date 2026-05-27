import type { Metadata } from "next";
import AnimatedSection from "@/components/global/AnimatedSection";
import MarketingBanner from "@/components/global/MarketingBanner";
import WhyChooseUs from "@/components/pages/home/components/WhyChooseUs";
import ClientLogos from "@/components/pages/home/components/ClientLogos";
import TeamSection from "@/components/pages/nosotros/components/TeamSection";
import FAQSection from "@/components/global/FAQSection";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCheck, FaSearchDollar, FaChartPie, FaFileInvoiceDollar, FaBuilding, FaArrowLeft, FaQuoteRight, FaWhatsapp } from "react-icons/fa";
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
    ],
    commercialPitch: "Transformamos los datos en información estratégica. La contabilidad moderna no es solo cumplir un requisito legal, es la brújula financiera de su empresa. Nuestro enfoque proactivo garantiza transparencia ante socios, evita requerimientos regulatorios y le brinda la claridad necesaria para escalar su negocio con confianza.",
    features: [
      { title: "Estados Financieros NIIF", description: "Elaboración de estados financieros bajo Normas Internacionales (NIIF), otorgando validez global a sus cifras y facilitando la atracción de inversión." },
      { title: "Análisis de Costos y Rentabilidad", description: "Identificamos márgenes precisos por línea de negocio, ayudando a optimizar el uso de recursos y maximizar sus utilidades netas." },
      { title: "Reportes Gerenciales y KPIs", description: "Diseñamos tableros de control personalizados que traducen la complejidad contable en métricas claras para la toma de decisiones gerencial." }
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
    ],
    commercialPitch: "La planificación fiscal inteligente es la clave para la liquidez empresarial. No nos limitamos a liquidar impuestos; analizamos la estructura de su negocio para aplicar estrategias tributarias que maximicen sus beneficios de ley, mitigando riesgos de sanciones con la DIAN y asegurando el flujo de caja.",
    features: [
      { title: "Planeación Tributaria Preventiva", description: "Proyectamos sus impuestos con antelación, permitiendo estrategias legales que optimizan la carga fiscal antes del cierre de año." },
      { title: "Defensa y Requerimientos DIAN", description: "Asumimos la representación técnica ante requerimientos de autoridades fiscales, protegiendo el patrimonio de la empresa." },
      { title: "Auditoría Fiscal Integral", description: "Revisión exhaustiva de declaraciones previas para detectar contingencias, corregir errores y solicitar saldos a favor si aplican." }
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
    ],
    commercialPitch: "En un mercado volátil, la intuición no basta. Nuestra asesoría financiera actúa como un copiloto experto para su junta directiva. Evaluamos proyectos de inversión, estructuramos financiamiento y diseñamos modelos de negocio que blindan a su empresa contra riesgos, asegurando un crecimiento sostenido.",
    features: [
      { title: "Evaluación de Proyectos", description: "Análisis de factibilidad y retorno de inversión (TIR/VPN) para asegurar que cada nuevo paso de su empresa sea rentable." },
      { title: "Reestructuración Financiera", description: "Optimización de la estructura de capital y renegociación de pasivos para mejorar la salud financiera y la liquidez." },
      { title: "Valoración de Empresas", description: "Determinación objetiva y técnica del valor de su compañía para fusiones, adquisiciones o entrada de nuevos socios." }
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
    ],
    commercialPitch: "Libérese de la carga operativa y concéntrese en el 'core' de su negocio. Nuestro servicio de Outsourcing BPO integra tecnología y talento experto para gestionar sus procesos de back-office. Operamos como su departamento financiero interno, garantizando eficiencia, reducción de costos y cero errores operativos.",
    features: [
      { title: "Procesamiento en Tiempo Real", description: "Gestión continua de la información mediante software ERP en la nube, garantizando que su contabilidad esté siempre actualizada." },
      { title: "Gestión Integral de Nómina", description: "Liquidación exacta de salarios, seguridad social, prestaciones y retenciones, cumpliendo estrictamente con la normativa laboral." },
      { title: "Control de Tesorería y Pagos", description: "Administración segura de flujos de caja, programación de pagos a proveedores y conciliaciones bancarias automáticas." }
    ]
  }
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return [
    { slug: "contabilidad" },
    { slug: "impuestos" },
    { slug: "asesoria" },
    { slug: "outsourcing" },
  ];
}

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;

  const seoData = {
    contabilidad: {
      title: "Outsourcing Contable y Balances NIIF | MC Contadores COL S.A.S.",
      description: "Servicios de contabilidad para empresas en Bogotá, Soacha y Colombia. Balances bajo NIIF, contabilidad de costos y reportes financieros confiables."
    },
    impuestos: {
      title: "Planeación Fiscal y Declaración de Impuestos | DIAN Colombia",
      description: "Optimice su carga tributaria legalmente. Elaboración de renta, IVA, ICA, retención en la fuente y atención de requerimientos DIAN en Bogotá y Soacha."
    },
    asesoria: {
      title: "Asesoría Financiera y Constitución de Sociedades | Colombia",
      description: "Asesoría financiera estratégica para su negocio en Colombia. Constitución de SAS, auditoría externa, revisoría fiscal y control de riesgos."
    },
    outsourcing: {
      title: "Outsourcing Contable BPO, Nómina y Tesorería | Colombia",
      description: "Delegue la carga operativa. Gestión de nómina electrónica, prestaciones, tesorería BPO y conciliación bancaria para empresas en Bogotá y Soacha."
    }
  };

  const currentSeo = seoData[slug as keyof typeof seoData];

  if (!currentSeo) {
    return {
      title: "Servicios Profesionales de Contabilidad",
      description: "Firma especializada en servicios de auditoría y consultoría contable, tributaria y financiera en Colombia."
    };
  }

  return {
    title: currentSeo.title,
    description: currentSeo.description,
    alternates: {
      canonical: `https://mccontadorescol.com/portafolio/${slug}`,
    },
  };
}

export default async function ServicePage(props: { params: Params }) {
  const params = await props.params;
  const data = serviceData[params.slug as keyof typeof serviceData];

  if (!data) {
    notFound();
  }

  const IconComponent = data.icon;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${data.titlePrefix}${data.titleHighlight}`,
    "provider": {
      "@type": "ProfessionalService",
      "name": "MC Contadores COL S.A.S.",
      "image": "https://mccontadorescol.com/images/logo.png",
      "url": "https://mccontadorescol.com"
    },
    "description": data.description,
    "areaServed": "CO"
  };

  return (
    <div className="flex flex-col w-full bg-color-gray-light min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              <p className="text-xl leading-relaxed text-gray-300 mb-8">
                {data.description}
              </p>
              
              <a 
                href={`https://wa.me/573159105890?text=${encodeURIComponent(`Hola MC Contadores, me gustaría saber más sobre sus servicios de ${data.titleHighlight}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-color-gold text-color-navy font-bold rounded-full hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"
              >
                Saber más <FaWhatsapp className="text-xl" />
              </a>
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

      {/* Detailed Commercial Info Section */}
      <section className="py-24 bg-color-gray-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-60 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Commercial Pitch */}
            <AnimatedSection className="lg:w-1/2">
              <div className="inline-block px-4 py-1 border border-color-navy/20 rounded-full mb-6 bg-white shadow-sm">
                <span className="text-color-navy font-bold text-xs tracking-widest uppercase">
                  Nuestro Enfoque Profesional
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-color-navy mb-6 leading-tight">
                Más que números, <br className="hidden md:block"/>
                <span className="text-color-gold relative inline-block">
                  estrategia para su negocio
                  <AnimatedUnderline />
                </span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-color-gold relative">
                <FaQuoteRight className="absolute top-6 right-8 text-4xl text-gray-100" />
                <p className="text-lg text-gray-700 leading-relaxed relative z-10 font-medium">
                  "{data.commercialPitch}"
                </p>
              </div>
            </AnimatedSection>

            {/* Features Grid */}
            <div className="lg:w-1/2 grid grid-cols-1 gap-6">
              {data.features.map((feature, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
                    <h3 className="text-xl font-bold text-color-navy mb-3 group-hover:text-color-gold transition-colors flex items-center gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-color-gold"></div>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed pl-5">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Team Section */}
      <TeamSection />

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

      {/* FAQ Section */}
      <FAQSection />

      {/* Marketing CTA */}
      <MarketingBanner />
    </div>
  );
}
