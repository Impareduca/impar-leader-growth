import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LeadModal } from "@/components/LeadModal";
import {
  ArrowRight,
  Users,
  Compass,
  Sparkles,
  Presentation,
  Cpu,
  GraduationCap,
  ShieldCheck,
  Mountain,
  Heart,
  Layers,
  Mail,
  Phone,
  Linkedin,
  Activity,
  Users2,
  Award,
  Building2,
  Briefcase,
  UserCheck,
} from "lucide-react";

// Imagens
const logoImpar =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAyADIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==";

const fotoSuzi =
  "https://drive.google.com/uc?export=view&id=1s1xmsosC_RB8C8IRXJ0fdNzqtd7gpciH";

const fotoLuiz =
  "https://drive.google.com/uc?export=view&id=1FsFK3dDog8iKZsL9RYXSu5T64BnzaJbA";

const imagemHero =
  "https://drive.google.com/uc?export=view&id=1Asi0nSeXvT9xFoJceKzNHSUNJ2e5QoTC";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ÍMPAR Desenvolvimento de Pessoas | Consultoria Premium em RH e Liderança" },
      {
        name: "description",
        content:
          "Consultoria premium de desenvolvimento humano. Diagnóstico, desenvolvimento e gestão para médias e grandes empresas, profissionais de RH e líderes.",
      },
      { property: "og:title", content: "ÍMPAR Desenvolvimento de Pessoas" },
      {
        property: "og:description",
        content:
          "23 anos desenvolvendo pessoas. Consultoria premium que une método, escuta e tecnologia proprietária.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const platforms = [
  {
    icon: Users,
    title: <em>IMPARPERFIL</em>,
    desc: "Plataforma de avaliação comportamental proprietária, com relatórios executivos e trilhas de desenvolvimento personalizadas.",
  },
  {
    icon: GraduationCap,
    title: <em>IMPAREDUCA</em>,
    desc: (
      <>
        Plataforma <em>white label</em> de consultoria e educação a distância, com trilhas
        customizadas para cada organização.
      </>
    ),
  },
  {
    icon: Cpu,
    title: <em>IMPARGESTOR</em>,
    desc: "Plataforma com IA para gestão de pessoas: metas, avaliações, PDIs e indicadores num único lugar.",
  },
];

const services = [
  {
    icon: Award,
    title: (
      <>
        Avaliação <em>DISC</em> Executiva
      </>
    ),
    desc: "Diagnóstico comportamental profundo para decisões de contratação, sucessão e desenvolvimento de executivos.",
  },
  {
    icon: Sparkles,
    title: "Coaching Executivo",
    desc: "Processos individuais para CEOs e diretores, com foco em performance, autoliderança e clareza estratégica.",
  },
  {
    icon: UserCheck,
    title: "Coaching para Líderes",
    desc: "Programas estruturados para média e nova liderança desenvolverem presença, gestão de pessoas e resultado.",
  },
  {
    icon: Compass,
    title: "Mentorias Profissionais",
    desc: (
      <>
        Acompanhamento estratégico para líderes e profissionais de RH que querem abrir a própria
        consultoria, com o programa <em>Viva de RH</em>.
      </>
    ),
  },
  {
    icon: Users2,
    title: "Workshops Comportamentais",
    desc: "Encontros vivenciais para times desenvolverem comunicação, colaboração e engenharia de equipes.",
  },
  {
    icon: Presentation,
    title: "Treinamentos In Company",
    desc: (
      <>
        Programas sob medida, presenciais e <em>online</em>, de liderança, comunicação,{" "}
        <em>feedback</em> e gestão de pessoas.
      </>
    ),
  },
  {
    icon: Mountain,
    title: "Palestras e Eventos",
    desc: "Conteúdos autorais para convenções, kick-offs e encontros corporativos, com condução experiente e envolvente.",
  },
  {
    icon: Activity,
    title: "Análise Corporal",
    desc: "Leitura das dinâmicas corporais aplicada ao desenvolvimento de pessoas, com foco em presença, comunicação e autoconhecimento.",
  },
];

const clientLogos = [
  "ALBRAS",
  "TRACBEL",
  "Hydro",
  "Würth",
  "Aqualand",
  "Supergiro",
  "Rio Azul",
  "Consag",
];


const audiences = [
  {
    icon: Building2,
    title: "Médias e Grandes Empresas",
    desc: "Soluções premium em RH e desenvolvimento humano para organizações que buscam resultados consistentes e cultura de alta performance.",
  },
  {
    icon: Briefcase,
    title: "Profissionais de RH",
    desc: (
      <>
        Mentorias e formações para profissionais CLT que querem dar o próximo passo e abrir a
        própria consultoria, com o programa <em>Viva de RH</em>.
      </>
    ),
  },
  {
    icon: UserCheck,
    title: "Líderes e Executivos",
    desc: "Desenvolvimento individual, coaching e mentoria para CEOs, diretores e líderes em momentos-chave de carreira e negócio.",
  },
];

const differentials = [
  {
    icon: ShieldCheck,
    title: "23 anos de expertise comprovada",
    desc: "Duas décadas de prática ajustada em campo, com centenas de empresas de diferentes portes e setores.",
  },
  {
    icon: Mountain,
    title: "Certificados em Outdoor Training",
    desc: "Metodologias vivenciais conduzidas por especialistas certificados. Aprendizado que fica no corpo, não só no slide.",
  },
  {
    icon: Heart,
    title: "Toque humano e tecnologia proprietária",
    desc: (
      <>
        Escuta, presença e método, potencializados pelas plataformas <em>IMPARGESTOR</em> e{" "}
        <em>IMPAREDUCA</em> para escalar sem perder alma.
      </>
    ),
  },
  {
    icon: Layers,
    title: "Diagnóstico, desenvolvimento e gestão",
    desc: "Um ecossistema integrado: avaliar perfis, desenvolver pessoas e acompanhar resultados no mesmo fluxo.",
  },
];

function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center">
            <img src={logoImpar} alt="ÍMPAR" className="h-8 w-auto" />
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#quem-somos" className="hover:text-foreground">Quem somos</a>
            <a href="#servicos" className="hover:text-foreground">O que fazemos</a>
            <a href="#para-quem" className="hover:text-foreground">Para quem</a>
            <a href="#diferenciais" className="hover:text-foreground">Por que ÍMPAR</a>
            <a href="#contato" className="hover:text-foreground">Contato</a>
          </nav>
          <button
            type="button"
            onClick={openModal}
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 md:inline-flex"
          >
            Fale conosco
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft/60 via-background to-background" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              Desde 2002
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-primary md:text-6xl">
              23 anos desenvolvendo pessoas. Agora, escalando com tecnologia.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A ÍMPAR é uma consultoria premium de desenvolvimento humano. Servimos médias e
              grandes empresas, profissionais de RH e líderes que buscam transformação real.
              Combinamos diagnóstico, desenvolvimento e gestão em um ecossistema integrado.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/20 transition hover:opacity-90"
              >
                Converse com a ÍMPAR
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                Explorar soluções
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={logoImpar}
              alt="ÍMPAR"
              className="aspect-[4/5] w-full rounded-2xl border border-border object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-4 shadow-lg md:block">
              <p className="font-display text-3xl font-semibold text-brand">23</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">anos de estrada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem somos */}
      <section id="quem-somos" className="border-t border-border/60 bg-surface">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">Quem somos</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
              23 anos formando líderes. Agora, escalando com tecnologia.
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { name: "Suzi Souza", role: "Cofundadora, técnica", src: fotoSuzi },
                { name: "Luiz Martins", role: "Cofundador, gestão", src: fotoLuiz },
              ].map(({ name, role, src }) => (
                <div key={name} className="overflow-hidden rounded-xl border border-border bg-card">
                  <img src={src} alt={name} className="aspect-square w-full object-cover" />
                  <div className="p-3">
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 md:col-span-3">
            <p className="text-lg leading-relaxed text-foreground/85">
              A ÍMPAR oferece soluções personalizadas para o desenvolvimento de líderes e
              equipes, focando na transformação de desafios em oportunidades e na promoção de
              equilíbrio, inovação e crescimento contínuo.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85">
              Com 23 anos de experiência consolidada, a empresa combina metodologias comprovadas
              com inovação tecnológica e toque humano. Nossos diferenciais: foco em soluções
              adaptadas à realidade das empresas, acompanhamento especializado em liderança,
              especialistas certificados em <em>Outdoor Training</em>, mentorias digitais para
              públicos específicos (nova e média liderança, profissionais de RH) e uso de{" "}
              <em>assessments</em> internacionais como <em>STARTRUST Executive Advisor</em>.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85">
              Atuamos em todo o território nacional com soluções <em>online</em>, além de
              presença regular nos estados do Norte e Nordeste. Nossa transformação é
              real: trabalhamos com acompanhamento contínuo dos clientes, impulsionando sucesso
              profissional e organizacional.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">Missão</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  Desenvolver pessoas para que organizações prosperem com consciência e resultado.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">Visão</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  Consolidar a ÍMPAR como referência nacional no desenvolvimento de líderes,
                  profissionais e empreendedores de RH, combinando experiência prática, formação
                  estratégica e soluções digitais customizadas e aplicadas às organizações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Soluções */}
      <section id="servicos" className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">Soluções</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
              Plataformas proprietárias e serviços de consultoria.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Do diagnóstico comportamental à formação de novos consultores, da vivência
              presencial à tecnologia proprietária. Um ecossistema completo de soluções.
            </p>
          </div>

          {/* Plataformas */}
          <div className="mt-14">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-2xl font-semibold text-primary">Plataformas</h3>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Tecnologia ÍMPAR
              </span>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {platforms.map(({ icon: Icon, title, desc }, i) => (
                <article
                  key={i}
                  className="group rounded-2xl border border-border bg-card p-7 transition hover:border-brand hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-5 font-display text-xl font-semibold text-primary">{title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div className="mt-16">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-2xl font-semibold text-primary">Serviços</h3>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Consultoria e desenvolvimento
              </span>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, desc }, i) => (
                <article
                  key={i}
                  className="group rounded-2xl border border-border bg-card p-6 transition hover:border-brand hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-display text-base font-semibold text-primary">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de clientes */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">Clientes</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-primary md:text-3xl">
              Empresas que confiam na ÍMPAR
            </h2>
          </div>
        </div>
        <div className="relative overflow-hidden pb-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-16 px-8">
            {[...clientLogos, ...clientLogos].map((name, i) => (
              <div
                key={i}
                className="flex h-16 min-w-[160px] items-center justify-center rounded-lg border border-border/60 bg-card px-8 font-display text-lg font-semibold uppercase tracking-widest text-muted-foreground transition hover:text-brand"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Para quem */}
      <section id="para-quem" className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">Para quem</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
              Soluções desenhadas para cada público.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Atendemos organizações, profissionais e líderes com abordagens específicas para
              cada momento e desafio.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audiences.map(({ icon: Icon, title, desc }, i) => (
              <article
                key={i}
                className="rounded-2xl border border-border bg-card p-7 transition hover:border-brand hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">
              Por que escolher ÍMPAR
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
              O rigor da técnica, a alma da presença, a escala da tecnologia.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {differentials.map(({ icon: Icon, title, desc }, i) => (
              <article
                key={i}
                className="flex gap-5 rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
            Vamos desenhar a solução certa para o seu contexto?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Conversamos com organizações, profissionais de RH e líderes para entender o momento
            e propor o caminho mais eficaz.
          </p>
          <button
            type="button"
            onClick={openModal}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/20 transition hover:opacity-90"
          >
            Converse com a ÍMPAR
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Saiba Mais - Bios */}
      <section id="saiba-mais" className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">Saiba mais</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
              Quem lidera a ÍMPAR.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Duas trajetórias complementares que sustentam a nossa forma de fazer consultoria.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-5">
                <img
                  src={fotoSuzi}
                  alt="Suzi Souza"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-display text-2xl font-semibold text-primary">Suzi Souza</h3>
                  <p className="text-sm text-brand">Proprietária e Diretora Técnica</p>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/85">
                <p>
                  Psicóloga Organizacional, Mestre em Recursos Humanos e Gestão do Conhecimento,
                  pós-graduada em Administração de <em>Marketing</em> pela UNISINOS-RS.
                  Proprietária da ÍMPAR Desenvolvimento de Pessoas, com mais de 30 anos de atuação
                  em Recursos Humanos em empresas de grande e médio portes.
                </p>
                <p>
                  Atua como Docente de Pós-Graduação (MBA) no Centro Universitário UNIFTEC,{" "}
                  <em>Executive Coach</em>, Mentora de Profissionais de RH, <em>Coach</em> de
                  Líderes, instrutora de cursos e palestras na área comportamental, formação de
                  gestores e desenvolvimento de equipes.
                </p>
                <p>
                  <em>Trainer DISC IMPARPERFIL</em>, <em>Adviser STARTRUST</em>, Analista Corporal
                  O Corpo Explica, Mentora e <em>Coach</em> de Excelência pelo Instituto
                  Excelência em <em>Coaching</em>. Com capacitação para Treinamentos ao Ar Livre
                  pela <em>Outward Bound Brasil</em>.
                </p>
                <p>
                  Experiência em Têxtil Renner Vicunha (RS), Perdigão Agroindustrial (SC), Telet
                  (RS), Amazônia Celular (PA) e CREA (PA). Diretora de Educação da ABRH-PA.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-5">
                <img
                  src={fotoLuiz}
                  alt="Luiz Cláudio Martins"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-display text-2xl font-semibold text-primary">
                    Luiz Cláudio Martins
                  </h3>
                  <p className="text-sm text-brand">Diretor de Negócios</p>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/85">
                <p>
                  <em>Coach</em> Bilíngue, <em>Master</em> Analista de Perfil Comportamental{" "}
                  <em>DiSC</em> e Analista de Engenharia de Equipes. Instrutor de treinamento e
                  Mentor em Desenvolvimento de Pessoas.
                </p>
                <p>
                  <em>Outdoor Training Instructor</em> pela <em>Outward Bound Brasil</em> para
                  condução de atividades Vivenciais ao Ar Livre e processamento de dinâmicas
                  (CAV), com certificação em Primeiros Socorros e Cuidados Médicos.
                </p>
                <p>
                  Oficial de Marinha pós-graduado, Gestor no segmento <em>Off-Shore</em>,
                  Professor de Língua Inglesa, com quatro anos de experiência no mercado de ações
                  em Londres. Atualmente Líder do Núcleo Setorial de Gestão Organizacional na
                  Associação Comercial do Pará.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* Footer / Contato */}
      <footer id="contato" className="border-t border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold">ÍMPAR</p>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Desenvolvimento de Pessoas desde 2002.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
              Contato
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:impareduca@impareduca.com.br"
                  className="inline-flex items-center gap-2 hover:text-brand-soft"
                >
                  <Mail className="h-4 w-4" />
                  impareduca@impareduca.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5591999945999"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brand-soft"
                >
                  <Phone className="h-4 w-4" />
                  (91) 99994-5999
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/impar-educa%C3%A7%C3%A3o-profissional/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brand-soft"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
              Navegação
            </p>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#quem-somos" className="hover:text-brand-soft">Quem somos</a></li>
              <li><a href="#servicos" className="hover:text-brand-soft">O que fazemos</a></li>
              <li><a href="#para-quem" className="hover:text-brand-soft">Para quem</a></li>
              <li><a href="#diferenciais" className="hover:text-brand-soft">Por que ÍMPAR</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} ÍMPAR Desenvolvimento de Pessoas. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
