import type { Metadata } from "next";
import AnimatedSection from "@/components/global/AnimatedSection";
import OptimizedImage from "@/components/global/OptimizedImage";
import TeamSection from "@/components/pages/nosotros/components/TeamSection";
import { FaBullseye, FaEye, FaStar, FaCheck } from "react-icons/fa";
import AnimatedUnderline from "@/components/global/AnimatedUnderline";

export const metadata: Metadata = {
  title: "Quiénes Somos | Firma de Contabilidad y Auditoría en Colombia",
  description: "Conozca la trayectoria de MC Contadores COL S.A.S. Nuestro equipo experto ofrece servicios de auditoría, revisoría fiscal y outsourcing contable en Bogotá y Soacha.",
  alternates: {
    canonical: "https://mccontadorescol.com/nosotros",
  },
};

export default function Nosotros() {
  const valores = [
    { title: "Ética profesional", desc: "Actuamos con integridad, transparencia y responsabilidad en todas nuestras actuaciones." },
    { title: "Calidad y excelencia", desc: "Garantizamos servicios con altos estándares técnicos y mejora continua." },
    { title: "Compromiso", desc: "Nos enfocamos en el cumplimiento oportuno y efectivo de los objetivos de nuestros clientes." },
    { title: "Confidencialidad", desc: "Protegemos la información con rigor y discreción profesional." },
    { title: "Innovación", desc: "Incorporamos herramientas y metodologías que optimizan los procesos contables y de auditoría." },
    { title: "Responsabilidad social", desc: "Contribuimos al desarrollo sostenible y al fortalecimiento del entorno empresarial." },
    { title: "Trabajo en equipo", desc: "Fomentamos la colaboración interdisciplinaria para ofrecer soluciones integrales." },
    { title: "Honestidad", desc: "Manejar los recursos de manera eficiente y eficaz, en búsqueda del bienestar." }
  ];

  const objetivos = [
    { title: "Contables", desc: "Garantizar el adecuado registro, clasificación y presentación de la información contable asegurando confiabilidad y oportunidad.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop" },
    { title: "Tributarios", desc: "Optimizar la gestión tributaria mediante planeación fiscal, cumplimiento oportuno y minimización de riesgos.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop" },
    { title: "Fiscales", desc: "Fortalecer el control y la transparencia en el cumplimiento de disposiciones fiscales previniendo sanciones.", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop" },
    { title: "Financieros", desc: "Proporcionar análisis financieros estratégicos que faciliten decisiones, mejoren rentabilidad y crecimiento.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
    { title: "Comerciales", desc: "Ampliar la participación ofreciendo servicios diferenciados basados en calidad, confianza y valor agregado.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" },
    { title: "Operativos", desc: "Optimizar procesos internos mediante metodologías eficientes, innovación y mejora continua.", image: "/images/operativos_team.png" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative bg-color-navy text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Equipo de trabajo colaborando"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30 mix-blend-luminosity"
            containerClassName="w-full h-full"
          />
          {/* Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-color-navy/95 via-color-navy/85 to-color-navy"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Sobre <span className="text-color-gold relative inline-block">
                Nosotros
                <AnimatedUnderline />
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
              Conozca nuestra trayectoria, principios y el equipo interdisciplinario que hace de MC Contadores su mejor aliado estratégico.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Misión & Visión */}
      <section className="py-20 bg-color-gray-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white p-10 rounded-xl shadow-md h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 text-color-gray-light opacity-30">
                  <FaBullseye className="text-9xl" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-color-gold rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <FaBullseye className="text-3xl text-color-navy" />
                  </div>
                  <h2 className="text-3xl font-bold text-color-navy mb-6">Nuestra Misión</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    MC CONTADORES COL S.A.S. es una firma especializada en servicios de auditoría y consultoría contable, orientada a proporcionar soluciones integrales bajo los más altos estándares de calidad, ética profesional y cumplimiento normativo. Respaldados por un equipo interdisciplinario altamente calificado y con amplia experiencia, generamos información confiable y oportuna que fortalece la toma de decisiones y contribuye al desarrollo sostenible de nuestros clientes.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-color-navy p-10 rounded-xl shadow-md h-full text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 text-white opacity-5">
                  <FaEye className="text-9xl" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-color-navy-light border border-color-gold/30 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <FaEye className="text-3xl text-color-gold" />
                  </div>
                  <h2 className="text-3xl font-bold text-color-gold mb-6">Nuestra Visión</h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Ser una firma líder a nivel nacional en servicios de auditoría y consultoría contable, reconocida por su excelencia profesional, innovación y confiabilidad. Aspiramos a consolidarnos como aliados estratégicos de nuestros clientes, destacándonos por la experiencia de nuestro equipo y el cumplimiento riguroso de los estándares establecidos por los organismos de regulación, generando impacto positivo en el desarrollo empresarial del país.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valores Corporativos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block p-4 rounded-full bg-color-gold/10 mb-4">
              <FaStar className="text-color-gold text-3xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-color-navy mb-6">
              Valores <span className="text-color-gold">Corporativos</span>
            </h2>
            <div className="w-20 h-1 bg-color-gold mx-auto mb-6"></div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="bg-color-gray-light p-6 rounded-lg h-full border-b-2 border-transparent hover:border-color-gold transition-colors duration-300">
                  <h3 className="text-xl font-bold text-color-navy mb-3">{valor.title}</h3>
                  <p className="text-gray-600 text-sm">{valor.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Objectivos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-color-navy mb-4">
              Nuestros <span className="text-color-gold">Objetivos</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Metas claras y estructuradas que garantizan la calidad de nuestros servicios.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objetivos.map((obj, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="h-full">
                <div className="bg-white rounded-xl h-full border border-gray-200 hover:border-color-gold hover:shadow-xl transition-all group overflow-hidden flex flex-col">
                  {/* Image Header */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-color-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                    <OptimizedImage
                      src={obj.image}
                      alt={`Objetivo ${obj.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      containerClassName="w-full h-full"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-color-navy mb-4 group-hover:text-color-gold transition-colors">
                      {obj.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
}
