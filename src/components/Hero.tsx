import Image from 'next/image';
import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const navigation = [
  ['Info', '#info'],
  ['Scaletta', '#roadmap'],
  ['Musica', '#musica'],
  ['Beer Stories', '#beer-stories'],
  ['Extra', '#extra'],
];

const Hero: React.FC = () => {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-[var(--wedding-cream)]/15 bg-[var(--wedding-ink)]/95 px-5 backdrop-blur-md sm:px-8">
        <nav aria-label="Navigazione principale" className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-1 sm:gap-5">
          <a href="#home" className="shrink-0 font-rockidate text-lg text-[var(--wedding-cream)] sm:text-2xl" aria-label="Angie e Fabio, inizio pagina">A<span className="text-[var(--wedding-amber)]">&</span>F</a>
          <div className="flex max-w-[calc(100%-4rem)] items-center gap-1 overflow-x-auto whitespace-nowrap py-3 sm:gap-7">
            {navigation.map(([label, href]) => <a key={href} href={href} className="shrink-0 font-text text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--wedding-cream)]/75 sm:tracking-[0.16em] transition-colors hover:text-[var(--wedding-amber)] sm:text-xs">{label}</a>)}
          </div>
        </nav>
      </header>
      <section id="home" className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 pb-16 pt-12 sm:px-8 md:min-h-[590px] md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:py-16" aria-labelledby="hero-title">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="font-text text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--wedding-amber)] sm:text-xs">Il nostro grande giorno · 29 maggio 2027</p>
          <h1 id="hero-title" className="mt-5 font-rockidate text-6xl leading-[0.93] tracking-[-0.04em] text-[var(--wedding-cream)] sm:text-7xl lg:text-[100px]">Angie <span className="text-[var(--wedding-amber)]">&</span><br className="hidden md:block" /> Fabio</h1>
          <p className="mx-auto mt-6 max-w-lg font-text text-base leading-7 text-[var(--wedding-cream)]/75 sm:text-lg sm:leading-8 md:mx-0">Ebbene sì, ci sposiamo. Entra nel backstage della nostra piccola grande storia.</p>
          <a href="#roadmap" className="mt-8 inline-flex min-h-12 items-center gap-3 bg-[var(--wedding-amber)] px-5 font-text text-base font-bold uppercase tracking-[0.15em] text-[var(--wedding-ink)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--wedding-cream)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--wedding-ink)]">Scopri la scaletta <ArrowDownRight aria-hidden="true" className="size-4" /></a>
        </div>
        <div className="order-1 mx-auto w-full max-w-[540px] md:order-2 md:max-w-none">
          <div className="relative border border-[var(--wedding-cream)]/30 bg-[var(--wedding-ink-2)] p-2 shadow-[12px_12px_0_var(--wedding-amber)] sm:p-3">
            <Image src="/images/segnaletiche.png" alt="Illustrazione segnaletica di Angie e Fabio" width={1536} height={1024} priority className="h-auto w-full" />
            <span className="absolute -bottom-4 -left-3 bg-[var(--wedding-cream)] px-3 py-2 font-text text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--wedding-ink)] sm:-left-5 sm:text-[10px]">Angie & Fabio · Insieme</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
