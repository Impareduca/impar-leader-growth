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

// Imagens como constantes base64
const logoImpar =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAyADIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==";

const fotoSuzi =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAx8K8KBPOMCkXQSCXDCwn/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAB4AHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q";

const fotoLuiz =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAx8K8KBPOMCkXQSCXDCwn/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAB4AHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q";

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

const services = [
  {
    icon: Users,
    title: (
      <>
        Avaliações comportamentais
      </>
    ),
    desc: (
      <>
        <em>DISC</em>, <em>IMPARPERFIL</em> e <em>STARTRUST Executive Advisor</em>. Mapeamento
        profundo para decisões de contratação, sucessão e desenvolvimento.
      </>
    ),
  },
  {
    icon: Compass,
    title: "Mentorias",
    desc: (
      <>
        Acompanhamento estratégico para líderes e para profissionais de RH que querem abrir a
        própria consultoria, com o programa <em>Viva de RH</em>.
      </>
    ),
  },
  {
    icon: Sparkles,
    title: "Coaching",
    desc: "Processos estruturados, individuais e em grupo, para desbloquear performance, autoliderança e clareza de propósito.",
  },
  {
    icon: Presentation,
    title: "Treinamentos e Palestras",
    desc: (
      <>
        Programas sob medida, presenciais e <em>online</em>, de liderança, comunicação,{" "}
        <em>feedback</em> e gestão de pessoas.
      </>
    ),
  },
  {
    icon: Activity,
    title: "Análise Corporal",
    desc: "Leitura das dinâmicas corporais aplicada ao desenvolvimento de pessoas, com foco em presença, comunicação e autoconhecimento.",
  },
  {
    icon: Users2,
    title: "Engenharia de Equipes",
    desc: "Diagnóstico e otimização de times de alta performance, com intervenções desenhadas para o contexto e os desafios de cada empresa.",
  },
  {
    icon: Award,
    title: (
      <>
        Formação de Analista <em>DISC</em>
      </>
    ),
    desc: "Certificação profissional para consultores, líderes e profissionais de RH que querem dominar a metodologia e ampliar sua atuação.",
  },
  {
    icon: Cpu,
    title: <em>IMPARGESTOR</em>,
    desc: "Plataforma com IA para gestão de pessoas: metas, avaliações, PDIs e indicadores num único lugar.",
  },
  {
    icon: GraduationCap,
    title: <em>IMPAREDUCA</em>,
    desc: (
      <>
        Plataforma <em>white label</em> de consultoria e educação a distância.
      </>
    ),
  },
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
    title: "Líderes certificados em Outdoor Training",
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
  return (
    <div className="min-h-screen bg-background text-foreground">
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
          <a
            href="#contato"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 md:inline-flex"
          >
            Fale conosco
          </a>
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
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/20 transition hover:opacity-90"
              >
                Converse com a ÍMPAR
                <ArrowRight className="h-4 w-4" />
              </a>
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
              A ÍMPAR nasceu em 2002. Desde a fundação já passou por transformações orientadas
              para entregar transformação em seus clientes. Hoje resulta da união entre técnica e
              gestão. Suzi Souza, especialista em comportamento humano, e Luiz Martins, à frente
              da estratégia administrativa e financeira. Ao longo de mais de duas décadas
              construímos uma metodologia própria e resultados consistentes com diversas empresas.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85">
              Em 2026, demos um novo passo: a transformação digital do desenvolvimento humano com
              a plataforma <em>IMPARGESTOR</em>, integrando diagnóstico, aprendizagem e gestão de
              pessoas em escala, sem perder o toque humano que sempre nos definiu.
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
                  Ser referência em desenvolvimento humano, unindo método comprovado e tecnologia
                  proprietária.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">O que fazemos</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
              Um portfólio integrado para desenvolver, mensurar e sustentar performance.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Do diagnóstico comportamental à formação de novos consultores, da vivência
              presencial à tecnologia proprietária. Um ecossistema completo de soluções.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <article
                key={i}
                className="group rounded-2xl border border-border bg-card p-7 transition hover:border-brand hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
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
          <a
            href="#contato"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/20 transition hover:opacity-90"
          >
            Converse com a ÍMPAR
            <ArrowRight className="h-4 w-4" />
          </a>
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
