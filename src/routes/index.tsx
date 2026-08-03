import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LeadModal } from "@/components/LeadModal";
import logoImpar from "@/assets/generated/logoImpar.png";
import fotoHeroCasal from "@/assets/generated/fotoHeroCasal.jpg";
import logoBasa from "@/assets/generated/logoBasa.png";
import logoVotorantim from "@/assets/generated/logoVotorantim.png";
import logoAlbrasNovo from "@/assets/generated/logoAlbrasNovo.png";
import logoDicasa from "@/assets/generated/logoDicasa.png";
import logoProsegur from "@/assets/generated/logoProsegur.png";
import logoCdp from "@/assets/generated/logoCdp.png";
import logoHydroNovo from "@/assets/generated/logoHydroNovo.png";
import logoInviolavel from "@/assets/generated/logoInviolavel.png";
import logoUnimed from "@/assets/generated/logoUnimed.png";
import logoAbrhPa from "@/assets/generated/logoAbrhPa.png";
import logoAcp from "@/assets/generated/logoAcp.jpg";
import logoTracbel from "@/assets/generated/logoTracbel.png";
import logoWurth from "@/assets/generated/logoWurth.jpg";
import logoAqualand from "@/assets/generated/logoAqualand.png";
import logoSupergiro from "@/assets/generated/logoSupergiro.png";
import logoConsag from "@/assets/generated/logoConsag.png";
import fotoLuiz from "@/assets/generated/fotoLuiz.jpg";
import fotoSuzi from "@/assets/generated/fotoSuzi.jpg";
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
  Instagram,
  Facebook,
  MapPin,
  Activity,
  Users2,
  Award,
  Building2,
  Briefcase,
  UserCheck,
  Quote,
} from "lucide-react";

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
          "Desde 2002 desenvolvendo pessoas. Consultoria premium que une método, escuta e tecnologia disruptiva.",
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
    desc: (
      <>
        Plataforma de <em>Assessment</em>, Engenharia de Equipes e Avaliações de Perfil
        Comportamental baseada na metodologia <em>DISC</em> (Dominância, Influência,
        Estabilidade e Análise). A leitura dos perfis é a base para o autoconhecimento e para
        entender a conexão entre estilos de liderança e comunicação das equipes.
      </>
    ),
  },
  {
    icon: GraduationCap,
    title: <em>IMPAREDUCA</em>,
    desc: (
      <>
        Plataforma de conteúdo para ensino <em>online</em> de Consultorias, Mentorias e Cursos,
        com acesso 24 por 07, que conduz o consumidor do conteúdo por uma metodologia
        estruturada, estando o especialista presente de forma síncrona ou assíncrona.
      </>
    ),
  },
  {
    icon: Cpu,
    title: <em>IMPARGESTOR</em>,
    desc: "Plataforma de gestão potencializada por Inteligência Artificial, que integra os diversos departamentos da empresa para ampliar a capacidade de gestão, transformando informações em decisões e decisões em resultados.",
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
    href: "https://vivaderh.com.br/5/mentoria-de-lideres",
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
    href: "https://vivaderh.com.br/vrh-inscricao-org-ab",
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
  { name: "ALBRAS", src: logoAlbrasNovo },
  { name: "TRACBEL", src: logoTracbel },
  { name: "Hydro", src: logoHydroNovo },
  { name: "Würth", src: logoWurth },
  { name: "Aqualand", src: logoAqualand },
  { name: "Supergiro", src: logoSupergiro },
  { name: "Consag", src: logoConsag },
  { name: "Banco da Amazônia", src: logoBasa },
  { name: "Companhia Docas do Pará", src: logoCdp },
  { name: "Votorantim Cimentos", src: logoVotorantim },
  { name: "Prosegur", src: logoProsegur },
  { name: "diCasa", src: logoDicasa },
  { name: "Inviolável", src: logoInviolavel },
  { name: "Unimed", src: logoUnimed },
];

const partners = [
  { name: "ABRH-PA", src: logoAbrhPa },
  { name: "Associação Comercial do Pará", src: logoAcp },
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
    title: "Expertise comprovada",
    desc: "Desde 2002 entregando soluções para empresas de diferentes portes e setores.",
  },
  {
    icon: Mountain,
    title: "Certificados em Outdoor Training",
    desc: "Metodologias vivenciais conduzidas por especialistas certificados. Aprendizado duradouro que volta para a empresa.",
  },
  {
    icon: Heart,
    title: "Toque humano em tecnologia disruptiva",
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
    desc: "Um ecossistema integrado que avalia perfis, desenvolve pessoas e acompanha resultados no mesmo fluxo.",
  },
];

const testimonials = [
  {
    quote: (
      <>
        O maior ganho que essa jornada me proporcionou foi o meu desenvolvimento como líder.
        Aprendi a me comunicar de forma mais assertiva, a ouvir minha equipe com mais atenção,
        a conduzir <em>feedbacks</em> e conversas difíceis com confiança e a compreender
        melhor os diferentes perfis comportamentais por meio do <em>DISC</em>. Além do
        crescimento profissional, também evoluí no aspecto pessoal, desenvolvendo mais
        inteligência emocional, empatia e segurança para tomar decisões. São aprendizados
        que levarei para toda a vida e que contribuirão para o desenvolvimento contínuo da
        minha equipe de <em>merchandising</em> e para melhores resultados.
      </>
    ),
    name: "Felipe dos Santos Barata",
    role: "Supergiro",
  },
  {
    quote: (
      <>
        Obtive clareza de quem estava comigo, aprendi a conhecer melhor meu vendedor e a
        trabalhar os conflitos e dificuldades dele na sua jornada de trabalho. Muitas das
        vezes é só você estimular da forma correta que muita coisa já muda no comportamento.
        Ganhei métodos para aplicar diariamente; melhorou minha gestão e, o mais importante,
        consegui executar isso no meu dia a dia para melhorar minha gestão de pessoas.
      </>
    ),
    name: "Dhemson Sousa e Silva",
    role: "Rio Azul Distribuidora" as string | null,
  },
];

function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Tarjeta institucional */}
      <div className="bg-primary text-primary-foreground/90">
        <div className="mx-auto max-w-6xl px-6 py-2 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-widest">
            ÍMPAR Coaching e Desenvolvimento de Pessoa LTDA
          </p>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3 w-3 shrink-0" />
              Avenida Governador José Malcher, 153, sala 12, Nazaré, Belém/PA. CEP 66.035-065
            </span>
          </div>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px]">
            <a
              href="mailto:admin@impareduca.com.br"
              className="inline-flex items-center gap-1.5 hover:text-brand-soft"
            >
              <Mail className="h-3 w-3" />
              admin@impareduca.com.br
            </a>
            <a
              href="https://wa.me/5591999945999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-brand-soft"
            >
              <Phone className="h-3 w-3" />
              (91) 99994-5999
            </a>
            <div className="ml-4 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/impar-educação-profissional/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn ÍMPAR"
                className="hover:text-brand-soft"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href="http://facebook.com/impareduca"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook ÍMPAR"
                className="hover:text-brand-soft"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center">
            <img src={logoImpar} alt="ÍMPAR" className="h-8 w-auto" />
          </a>
          <nav className="hidden gap-8 text-sm text-brand md:flex">
            <a href="#quem-somos" className="hover:text-foreground">Mais sobre nós</a>
            <a href="#quem-transforma" className="hover:text-foreground">Quem Transforma</a>
            <a href="#servicos" className="hover:text-foreground">O que fazemos</a>
            <a href="#para-quem" className="hover:text-foreground">Quem transformamos</a>
            <a href="#diferenciais" className="hover:text-foreground">Por que a ÍMPAR?</a>
            <a href="#depoimentos" className="hover:text-foreground">Depoimentos</a>
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
            <h1 className="font-display text-4xl font-semibold leading-[1.05] text-primary md:text-6xl">
              Desde 2002 desenvolvendo pessoas com novas tendências e tecnologia.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A ÍMPAR é uma consultoria premium de desenvolvimento humano. Atendemos médias e
              grandes empresas, líderes, equipes e profissionais de RH que buscam transformação
              real. Combinamos diagnóstico, desenvolvimento e gestão em um ecossistema integrado.
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
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Explorar soluções
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={fotoHeroCasal}
              alt="Suzi Souza e Luiz Cláudio Martins - ÍMPAR Desenvolvimento de Pessoas"
              className="aspect-[4/5] w-full rounded-2xl border border-border object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-3 shadow-lg md:block">
              <img src={logoImpar} alt="ÍMPAR" className="h-12 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de clientes - prova social logo após o hero */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 pt-12">
          <p className="text-center text-xs font-semibold tracking-widest text-brand">
            Empresas que contratam a ÍMPAR
          </p>
        </div>
        <div className="relative overflow-hidden py-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-16 px-8">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="flex h-24 min-w-[180px] items-center justify-center px-6"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 ${
                    logo.name === "Companhia Docas do Pará" || logo.name === "Votorantim Cimentos"
                      ? "max-h-24 scale-[1.35]"
                      : "max-h-20"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem somos - institucional, enxuto */}
      <section id="quem-somos" className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">Mais sobre nós</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
            Método, acompanhamento e tecnologia a serviço de quem é transformado.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85">
            Combinamos metodologias comprovadas com inovação tecnológica e toque humano,
            atuando em todo o território nacional com soluções <em>online</em> e presencial,
            atuando regularmente no Norte e Nordeste.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Missão</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                Promover melhorias transformadoras, profundas e duradouras nas organizações,
                desenvolvendo profissionais, colaboradores e empreendedores, facilitando para
                que líderes e equipes alavanquem seus resultados por meio de soluções digitais
                personalizadas em desenvolvimento humano e gestão.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Valores</p>
              <ul className="mt-2 space-y-1.5 text-sm leading-snug text-foreground/85">
                <li><strong className="font-semibold">Valorização das Pessoas:</strong> fortalecer relações</li>
                <li><strong className="font-semibold">Integridade:</strong> coerência, transparência e responsabilidade</li>
                <li><strong className="font-semibold">Transformação com Propósito:</strong> mudanças reais</li>
                <li><strong className="font-semibold">Inovação Consistente:</strong> novas tecnologias e métodos</li>
                <li><strong className="font-semibold">Impacto Positivo:</strong> gerando resultados duradouros</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Transforma - bios reais, Suzi em destaque */}
      <section id="quem-transforma" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">Quem Transforma</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
              Duas trajetórias complementares.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-5">
            <article className="rounded-2xl border border-border bg-card p-8 lg:col-span-3">
              <div className="flex items-center gap-5">
                <img
                  src={fotoSuzi}
                  alt="Suzi Souza"
                  className="h-24 w-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-display text-2xl font-semibold text-primary">Suzi Souza</h3>
                  <p className="text-sm text-brand">Fundadora e Diretora Técnica</p>
                  <div className="mt-1.5 flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/suzicns/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn de Suzi Souza"
                      className="text-muted-foreground transition hover:text-brand"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/eu.suzi.souza"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram de Suzi Souza"
                      className="text-muted-foreground transition hover:text-brand"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/85">
                <p>
                  Psicóloga Organizacional, Mestre em Recursos Humanos e Gestão do Conhecimento,
                  pós-graduada em Administração de <em>Marketing</em> pela UNISINOS-RS. Fundadora
                  da ÍMPAR Desenvolvimento de Pessoas, desde 1991 atuou no RH de empresas de
                  grande e médio portes, como Têxtil Renner Vicunha (RS), Perdigão Agroindustrial
                  (SC), Telet (RS), Amazônia Celular (PA) e CREA (PA).
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
                  Excelência em <em>Coaching</em>, certificação como instrutora vivencial pela{" "}
                  <em>Outward Bound Brasil</em> em atividades de <em>Outdoor</em> e{" "}
                  <em>Indoor Training</em> com processamento de dinâmicas (CAV), é Diretora de
                  Educação da ABRH-PA.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
              <div className="flex items-center gap-4">
                <img
                  src={fotoLuiz}
                  alt="Luiz Cláudio Martins"
                  className="h-24 w-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-display text-xl font-semibold text-primary">
                    Luiz Cláudio Martins
                  </h3>
                  <p className="text-sm text-brand">Diretor Financeiro e Administrativo</p>
                  <div className="mt-1.5 flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/luiz-claudio-martins/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn de Luiz Cláudio Martins"
                      className="text-muted-foreground transition hover:text-brand"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/smartluiz/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram de Luiz Cláudio Martins"
                      className="text-muted-foreground transition hover:text-brand"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/85">
                <p>
                  Diretor Financeiro e Administrativo da ÍMPAR, Analista de Engenharia de
                  Equipes e de Perfil Comportamental <em>DISC</em>, <em>Coach</em> Bilíngue,
                  Mentor de Homens, Palestrante e Instrutor na área comportamental. Membro da
                  Câmara Setorial de Consultores e Gestão de Pessoas na Associação Comercial do
                  Pará.
                </p>
                <p>
                  Certificação como instrutor vivencial pela <em>Outward Bound Brasil</em> em
                  atividades de <em>Outdoor</em> e <em>Indoor Training</em> com processamento de
                  dinâmicas (CAV), certificado em Primeiros Socorros e Cuidados Médicos.
                </p>
                <p>
                  Oficial de Marinha pós-graduado, Gestor no segmento <em>Off-Shore</em>,
                  proficiência profissional no ensino da língua inglesa, com quatro anos de
                  atuação no mercado de ações em Londres; fala italiano.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Parceiros institucionais */}
      <section className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-xs font-semibold tracking-widest text-brand">
            Instituições parceiras
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-28 w-52 items-center justify-center rounded-2xl border border-border bg-card p-5"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section id="servicos" className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">Soluções e Recursos</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
              Sempre um passo à frente, na fronteira entre pessoas e tecnologia.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Do diagnóstico comportamental à transformação do Líder Alfa, da experiência
              analógica à presença digital. Um ecossistema completo de soluções adaptáveis e
              customizáveis.
            </p>
          </div>

          {/* Plataformas */}
          <div className="mt-14">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-2xl font-semibold text-primary">Plataformas</h3>
              <span className="text-xs tracking-widest text-brand">
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
              <span className="text-xs tracking-widest text-brand">
                Desenvolvimento
              </span>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, desc, href }, i) => (
                <article
                  key={i}
                  className="group rounded-2xl border border-border bg-card p-6 transition hover:border-brand hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-display text-base font-semibold text-primary">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
                    >
                      Saiba mais
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section id="para-quem" className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">Para quem</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
              Soluções customizadas para cada público.
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
              Por que escolher a ÍMPAR?
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

      {/* Depoimentos */}
      <section id="depoimentos" className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">Depoimentos</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
              Resultados que falam por quem viveu a transformação.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map(({ quote, name, role }, i) => (
              <article key={i} className="rounded-2xl border border-border bg-card p-7">
                <Quote className="h-6 w-6 text-brand" />
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">{quote}</p>
                <div className="mt-5">
                  <p className="text-sm font-semibold text-primary">{name}</p>
                  {role && <p className="text-xs text-muted-foreground">{role}</p>}
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
            Qual desafio a sua organização precisa superar neste momento?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Entendemos o desafio a ser superado e propomos a solução mais eficaz.
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
              <li>
                <a
                  href="http://facebook.com/impareduca"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brand-soft"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
              Navegação
            </p>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#quem-somos" className="hover:text-brand-soft">Mais sobre nós</a></li>
              <li><a href="#quem-transforma" className="hover:text-brand-soft">Quem Transforma</a></li>
              <li><a href="#servicos" className="hover:text-brand-soft">O que fazemos</a></li>
              <li><a href="#para-quem" className="hover:text-brand-soft">Quem transformamos</a></li>
              <li><a href="#diferenciais" className="hover:text-brand-soft">Por que a ÍMPAR?</a></li>
              <li><a href="#depoimentos" className="hover:text-brand-soft">Depoimentos</a></li>
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
