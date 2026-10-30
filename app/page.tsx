"use client";

import Image from "next/image";
import { useState } from "react";
import ParticleBackground from "./components/ParticleBackground";
import { sendEmail } from "@/app/actions/sendEmail";
type Project = {
  name: string;
  desc: string;
  tags: string[];
  url: string;
  image?: string;
};

const nav = [
  { href: "#inicio", label: "INICIO" },
  { href: "#sobre-mi", label: "SOBRE MÍ" },
  { href: "#portafolio", label: "PORTAFOLIO" },
  { href: "#experiencia", label: "EXPERIENCIA" },
  { href: "#contacto", label: "CONTACTO" },
];

const projects: Project[] = [
  {
    name: "PsicomorfosisGF",
    desc: "Versión 4.0 para la comunidad de PsicomorfosisGF.",
    tags: ["Next.js", "PWA", "Psicología"],
    url: "https://psicomorfosisgf.com",
    image: "/img/projects/psicomorfosisgf.png",
  },
  {
    name: "Luego Luego a tu mesa",
    desc: "Landing de una dark kitchen mexicana en Lima: menú, pedidos y galería.",
    tags: ["Landing", "Responsive", "Gastronomía"],
    url: "https://luegoluegoatumesa.com",
    image: "/img/projects/luegoluegoatumesa.png",
  },
  {
    name: "BeyondTacos",
    desc: "Sitio multimodal para servicios psicológicos.",
    tags: ["React", "JSON", "Gastronomía"],
    url: "https://psicomindhealth.vercel.app/",
    image: "/img/projects/beyondtacos.png",
  },
  {
    name: "Tlahuilab",
    desc: "PWA para una empresa de diseño grafico",
    tags: ["NEXT.JS", "PWA", "Diseño"],
    url: "https://www.tlahuilab.com/",
    image: "/img/projects/tlahuilab.png",
  },
  {
    name: "Fitness Psicoe",
    desc: "Sitio multimodal para servicios psicológicos.",
    tags: ["HTML", "CSS", "Responsive"],
    url: "https://fitnesspsicoe.vercel.app/",
    image: "/img/projects/fitnesspsicoe.png",
  },
  {
    name: "Psicomindhealth",
    desc: "Sitio multimodal para servicios psicológicos.",
    tags: ["HTML", "Responsive", "Psicología"],
    url: "https://psicomindhealth.vercel.app/",
    image: "/img/projects/psicomindhealth.png",
  },
  {
    name: "Metrologia OCP",
    desc: "Pagina web para laboratorio de metrología y calibración.",
    tags: ["HTML", "CSS", "Responsive"],
    url: "https://www.metrologiaocp.com/",
    image: "/img/projects/metrologiaocp.png",
  },
];

const stack = [
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: ".NET", icon: "https://cdn.simpleicons.org/dotnet" },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  },
  { name: "Dart", icon: "https://cdn.simpleicons.org/dart" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
  {
    name: "SQL Server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  { name: "AWS", icon: "/img/aws-logo.svg" },
  { name: "Apache", icon: "https://cdn.simpleicons.org/apache" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
  { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio" },
  {
    name: "Visual Studio",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",
  },
  { name: "Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/white" },
];

const experience = [
  {
    date: "Abr. 2026 – Presente",
    role: "Desarrollador Full Stack",
    company: "Freelance",
    points: [
      "Desarrollo de PsicomorfosisGF (v4.0 en Next.js y PWA) y Psicomindhealth.",
      "Plataformas web y landing pages: Luego Luego a tu mesa, Beyond Tacos, Re:suelta y Aznea.",
      "Soporte de infraestructura del Colegio Los Reyes Rojos.",
    ],
  },
  {
    date: "Oct. 2023 – Abr. 2026",
    role: "Analista Programador",
    company: "Ayesa Perú",
    points: [
      "Soluciones Full Stack (C#, .NET, React, Angular, SQL Server, AWS/Azure) para Cálidda, Enel e ISA Energía.",
      "Resolución de incidentes críticos en producción de alta disponibilidad.",
      "Levantamiento técnico de requerimientos con clientes corporativos.",
    ],
  },
  {
    date: "2021 – 2023",
    role: "Product Analyst",
    company: "Fiserv · Mobile Banking",
    points: [
      "Consultoría e integración de pagos: API REST/SOAP, pasarelas HPP y terminales Ingenico.",
      "Coordinación con equipos de EE. UU., México, Argentina, Europa e India.",
      "Herramientas y plugins internos en PHP para el equipo global.",
    ],
  },
  {
    date: "2020 – 2021",
    role: "Project Manager & Tech Lead",
    company: "SWYTI",
    points: [
      "Liderazgo de sistemas corporativos para Rotoplas en México, Perú y Brasil.",
      "Planificación de sistemas a medida y programación de módulos críticos.",
    ],
  },
  {
    date: "2019",
    role: "Desarrollador Full Stack",
    company: "Ticketapp · Venta de boletos",
    points: [
      "Módulos críticos y arquitectura de Ticketapp v2.0.",
      "Soporte L2/L3 de apps móviles de ventas, control de accesos e impresión térmica de boletos.",
    ],
  },
  {
    date: "2017 – 2019",
    role: "Desarrollador Full Stack",
    company: "Intelligenza Solutions For Business",
    points: [
      "Sistema de facturación y timbrado automatizado para e-commerce.",
      "Plataforma Tradytec y mantenimiento de sitios para Ginpass, Restaurante ENO y Galletas Marian.",
    ],
  },
  {
    date: "2015 – 2016",
    role: "Desarrollador Full Stack",
    company: "Instituto Nacional de Neurología y Neurocirugía",
    points: [
      "Sistema de gestión a medida para el departamento de enseñanza de una institución gubernamental.",
    ],
  },
];

const clients = [
  {
    name: "Rotoplas",
    logo: "/img/trabajosAnteriores/Rotoplas.png",
    scale: "scale-100",
  },
  {
    name: "Fiserv",
    logo: "/img/trabajosAnteriores/fiserv.png",
    scale: "scale-125",
  },

  {
    name: "Cálidda",
    logo: "/img/trabajosAnteriores/calidda.png",
    scale: "scale-300",
  },
  {
    name: "Enel",
    logo: "/img/trabajosAnteriores/enel.png",
    scale: "scale-150",
  },
  { name: "PsicomorfosisGF", logo: "/img/trabajosAnteriores/nombrePMGF.png" },
  {
    name: "ISA Energía",
    logo: "/img/trabajosAnteriores/isa-energia.png",
    scale: "scale-250",
  },

  { name: "Gin Group", logo: "/img/trabajosAnteriores/gingroup.png" },
  {
    name: "INNN",
    logo: "/img/trabajosAnteriores/innn.png",
    scale: "scale-300",
  },
  {
    name: "Restaurante ENO",
    logo: "/img/trabajosAnteriores/eno-restaurante.png",
  },
  {
    name: "Ticketapp",
    logo: "/img/trabajosAnteriores/logo_ticketapp.png",
    scale: "scale-75",
  },
  {
    name: "Colegio Los Reyes Rojos",
    logo: "/img/trabajosAnteriores/losreyesrojos.png",
  },
  { name: "Galletas Marian", logo: "/img/trabajosAnteriores/marian.svg" },
  { name: "Penguin", logo: "/img/trabajosAnteriores/penguin.avif" },
  {
    name: "Tradytec",
    logo: "/img/trabajosAnteriores/tradytec.png",
    scale: "scale-[1.6]",
  },
];
const services = [
  {
    num: "01",
    title: "Sitios web y landing pages",
    desc: "Páginas rápidas, listas para móvil y pensadas para que te contacten. Next.js, PWA y diseño a tu medida.",
  },
  {
    num: "02",
    title: "Sistemas y apps a medida",
    desc: "Plataformas con panel, bases de datos e integraciones. Angular, .NET y SQL Server.",
  },
  {
    num: "03",
    title: "Soporte y mantenimiento",
    desc: "Corrijo, actualizo y optimizo sitios y sistemas que ya tienes, para que sigan funcionando sin sorpresas.",
  },
];

const EMAIL = "rogelio_max@hotmail.com";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{
    text: string;
    isError: boolean;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setStatusMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await sendEmail(formData);

    if (res?.success) {
      setStatusMsg({ text: "¡Mensaje enviado con éxito!", isError: false });
      form.reset();
    } else {
      setStatusMsg({
        text: "Ocurrió un error. Intenta de nuevo.",
        isError: true,
      });
    }
    setSending(false);
  };

  return (
    <main className="min-h-screen bg-transparent font-sans text-brand-light selection:bg-[#81ECF2] selection:text-[#0d1622] relative pt-20">
      <ParticleBackground />

      {/* NAVBAR FIJA CON HAMBURGUESA */}
      <header className="w-full border-b border-white/10 bg-[#0d1520]/90 backdrop-blur-md px-6 py-4 flex items-center justify-between fixed top-0 z-50">
        <div className="text-xl font-bold tracking-wider text-white z-50">
          MAXANOTHER<span className="text-[#81ECF2]">WAYS</span>
        </div>

        {/* Enlaces Desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-brand-muted hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botón CV Desktop */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:block rounded-full border border-[#81ECF2] bg-[#81ECF2]/10 px-4 py-1.5 text-xs text-[#81ECF2] hover:bg-gradient-to-r hover:from-[#81ECF2] hover:via-[#9AEFEA] hover:to-[#B6F2EA] hover:text-[#0d1622] font-semibold transition duration-300"
        >
          DESCARGAR CV
        </a>

        {/* Botón Hamburguesa Mobile */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú Desplegable Mobile */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0d1520]/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-8 gap-6 md:hidden shadow-2xl animate-fade-in">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-sm font-bold tracking-widest hover:text-[#81ECF2] transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              download
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full border border-[#81ECF2] bg-[#81ECF2]/10 px-6 py-2.5 text-xs text-[#81ECF2] font-semibold transition mt-2"
            >
              DESCARGAR CV
            </a>
          </div>
        )}
      </header>

      {/* CONTENEDOR GENERAL DE 12 COLUMNAS */}
      <div className="max-w-[1600px] mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
        {/* 1. HERO - PRIMERO EN MOBILE, CENTRADO EN DESKTOP AL INICIO */}
        <div
          id="inicio"
          className="lg:col-span-6 lg:col-start-4 lg:row-start-1 scroll-mt-32 text-center bg-[rgba(19,30,43,0.4)] backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden target:border-[#81ECF2] target:shadow-[0_0_30px_rgba(129,236,242,0.4)] transition-all duration-700"
        >
          <h1 className="text-2xl lg:text-4xl font-extrabold mb-2 text-white tracking-tight">
            ROGELIO M. NÚÑEZ SÁNCHEZ
          </h1>
          <h2 className="text-xs lg:text-sm text-[#81ECF2] mb-4 font-semibold tracking-wide">
            Desarrollador Full Stack , Arquitecto de Soluciones y Analista de
            Producto
          </h2>
          <p className="text-xs lg:text-sm text-brand-muted max-w-lg mx-auto mb-6 leading-relaxed">
            Hola soy Max, Ingeniero en Sistemas Computacionales (IPN-ESCOM) con
            más de 10 años de experiencia en México y Perú. He pasado por banca
            movil, empresas de energía, software corporativo y operaciones
            criticas entre otros ... y hoy ayudo negocios, profesionales y
            empresas a tener una presencia digital que funcione.
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="https://api.whatsapp.com/send?text=Hola,buen%20d%C3%ADa.&phone=5215520925507"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-xs bg-gradient-to-r from-[#81ECF2] via-[#9AEFEA] to-[#B6F2EA] text-[#0d1622] font-bold rounded-full hover:opacity-90 transition shadow-md"
            >
              Escríbeme por WhatsApp
            </a>
          </div>

          {/* HE TRABAJADO CON */}
          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-widest text-brand-muted">
              He trabajado con empresas como:
            </p>
            <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
              {clients.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-center p-2"
                >
                  <img
                    src={c.logo}
                    alt={`Logo de ${c.name}`}
                    title={c.name}
                    className={`h-8 md:h-10 w-auto object-contain hover:scale-110 transition-transform duration-300 ${c.scale || ""}`}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 2. COLUMNA IZQUIERDA (SOBRE MÍ & STACK) - SEGUNDA FILA */}
        {/* SEPARADO EN 2 TARJETAS PARA EL BRILLO COMPLETO */}
        <div className="lg:col-span-3 lg:col-start-1 lg:row-start-2 flex flex-col gap-6">
          <section
            id="sobre-mi"
            className="scroll-mt-32 bg-[rgba(19,30,43,0.4)] backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl target:border-[#81ECF2] target:shadow-[0_0_30px_rgba(129,236,242,0.4)] transition-all duration-700"
          >
            <h3 className="text-base font-bold mb-3 text-white border-b border-white/10 pb-2 tracking-wide uppercase">
              MI FILOSOFÍA
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed mb-3">
              Creo en el desarrollo de software como una herramienta para
              simplificar lo complejo. Escribo código limpio, construyo
              arquitecturas resilientes y sistemas que no solo resuelven el
              problema de hoy, sino que están preparados para crecer mañana.
            </p>
            <p className="text-xs text-brand-muted leading-relaxed">
              Más allá del código, mi objetivo es entender el núcleo del negocio
              para entregar soluciones que generen verdadero impacto.
            </p>
          </section>

          <section className="bg-[rgba(19,30,43,0.4)] backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="text-base font-bold mb-3 text-white border-b border-white/10 pb-2 tracking-wide uppercase">
              STACK TECNOLÓGICO
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
              {stack.map((item) => (
                <div
                  key={item.name}
                  title={item.name}
                  className="flex flex-col items-center justify-center p-2.5 aspect-square bg-[#101924]/80 border border-white/10 rounded-xl hover:border-[#81ECF2] hover:scale-105 transition duration-200 group"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-7 h-7 object-contain mb-1.5 group-hover:brightness-125 transition"
                    loading="lazy"
                  />
                  <span className="text-[10px] text-brand-muted group-hover:text-white transition font-medium text-center line-clamp-1">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 3. COLUMNA CENTRAL (SERVICIOS Y PROYECTOS) - SEGUNDA FILA */}
        <div className="lg:col-span-6 lg:col-start-4 lg:row-start-2 flex flex-col gap-6">
          <section
            id="servicios"
            className="scroll-mt-32 bg-[rgba(19,30,43,0.4)] backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl target:border-[#81ECF2] target:shadow-[0_0_30px_rgba(129,236,242,0.4)] transition-all duration-700"
          >
            <h3 className="mb-5 text-center text-base font-bold uppercase tracking-wide text-white">
              Qué puedo hacer por ti
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.num}
                  className="rounded-2xl border border-[#213245] bg-[#101924]/80 p-5 transition duration-300 hover:border-[#81ECF2]"
                >
                  <p className="mb-2 text-[10px] font-bold text-[#81ECF2]">
                    {s.num}
                  </p>
                  <h4 className="mb-2 text-sm font-bold text-white">
                    {s.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-brand-muted">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div
            id="portafolio"
            className="scroll-mt-32 bg-gradient-to-br from-[#81ECF2]/90 via-[#9AEFEA]/90 to-[#B6F2EA]/90 backdrop-blur-md text-[#0d1622] p-6 lg:p-8 rounded-3xl shadow-2xl target:shadow-[0_0_40px_rgba(129,236,242,0.6)] target:scale-[1.01] transition-all duration-700"
          >
            <h3 className="text-xl lg:text-2xl font-black mb-6 text-center tracking-widest uppercase">
              PROYECTOS DESTACADOS
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {projects.map((p) => (
                <article
                  key={p.name}
                  className="bg-[#101924]/90 text-white p-4 rounded-2xl border border-[#213245] shadow-lg flex flex-col justify-between hover:border-[#81ECF2] transition duration-300"
                >
                  <div className="h-32 bg-[#172331] rounded-xl mb-3 flex items-center justify-center text-xs text-brand-muted border border-white/5 overflow-hidden">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={300}
                        height={150}
                        className="object-cover object-top w-full h-full"
                      />
                    ) : (
                      <span>{p.name}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white">
                      {p.name}
                    </h4>
                    <p className="text-xs text-brand-muted mb-4 line-clamp-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="flex gap-1.5 flex-wrap">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#1a2938] text-[#81ECF2] text-[10px] px-2.5 py-0.5 rounded-full border border-[#283d52] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#81ECF2] hover:underline font-semibold"
                    >
                      Ver →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* 4. COLUMNA DERECHA (EXPERIENCIA Y CONTACTO) - SEGUNDA FILA */}
        {/* SEPARADO EN 2 TARJETAS PARA EL BRILLO COMPLETO */}
        <div className="lg:col-span-3 lg:col-start-10 lg:row-start-2 flex flex-col gap-6">
          <section
            id="experiencia"
            className="scroll-mt-32 bg-[rgba(19,30,43,0.4)] backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl target:border-[#81ECF2] target:shadow-[0_0_30px_rgba(129,236,242,0.4)] transition-all duration-700"
          >
            <h3 className="text-base font-bold mb-4 text-white border-b border-white/10 pb-2 tracking-wide uppercase">
              EXPERIENCIA PROFESIONAL
            </h3>

            <a
              href="/cv.pdf"
              download
              className="mb-6 block w-full rounded-full bg-gradient-to-r from-[#81ECF2] via-[#9AEFEA] to-[#B6F2EA] px-4 py-2.5 text-center text-xs font-bold text-[#0d1622] shadow-md transition hover:opacity-90"
            >
              DESCARGAR CV COMPLETO
            </a>

            <div className="space-y-4 text-xs">
              {experience.map((job) => (
                <div
                  key={job.role + job.company}
                  className="border-l-2 border-[#81ECF2] pl-3 py-1"
                >
                  <div className="text-[#81ECF2] font-semibold mb-0.5">
                    {job.date}
                  </div>
                  <div className="font-bold text-white">{job.role}</div>
                  <div className="text-brand-muted mb-1">{job.company}</div>
                  <ul className="list-disc list-inside text-brand-muted space-y-0.5">
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contacto"
            className="scroll-mt-32 bg-[rgba(19,30,43,0.4)] backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl target:border-[#81ECF2] target:shadow-[0_0_30px_rgba(129,236,242,0.4)] transition-all duration-700"
          >
            <h3 className="text-base font-bold mb-4 text-white border-b border-white/10 pb-2 tracking-wide uppercase">
              HABLEMOS
            </h3>
            <div className="text-xs text-brand-muted mb-4 space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-[#81ECF2]">✉️</span> {EMAIL}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                required
                className="w-full bg-[#101924]/80 border border-[#22364a] rounded-xl p-3 text-xs text-white placeholder:text-brand-muted focus:outline-none focus:border-[#81ECF2] transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-[#101924]/80 border border-[#22364a] rounded-xl p-3 text-xs text-white placeholder:text-brand-muted focus:outline-none focus:border-[#81ECF2] transition"
              />
              {/* NUEVO CAMPO DE TELÉFONO */}
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono / WhatsApp (Opcional)"
                className="w-full bg-[#101924]/80 border border-[#22364a] rounded-xl p-3 text-xs text-white placeholder:text-brand-muted focus:outline-none focus:border-[#81ECF2] transition"
              />
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                rows={3}
                required
                className="w-full bg-[#101924]/80 border border-[#22364a] rounded-xl p-3 text-xs text-white placeholder:text-brand-muted focus:outline-none focus:border-[#81ECF2] transition"
              ></textarea>

              {statusMsg && (
                <p
                  className={`text-xs font-semibold text-center ${statusMsg.isError ? "text-red-400" : "text-[#81ECF2]"}`}
                >
                  {statusMsg.text}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-gradient-to-r from-[#81ECF2] via-[#9AEFEA] to-[#B6F2EA] text-[#0d1622] font-extrabold py-3 rounded-full text-xs hover:opacity-90 transition shadow-md uppercase tracking-wider disabled:opacity-50"
              >
                {sending ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
              </button>
            </form>
          </section>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-4 text-center text-xs text-white/90 mt-8 bg-[#0d1520]/70 backdrop-blur-md relative z-10">
        MAXANOTHERWAYS © 2026 — TODOS LOS DERECHOS RESERVADOS
      </footer>
    </main>
  );
}
