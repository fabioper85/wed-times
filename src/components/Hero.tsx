'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, Menu, X } from 'lucide-react';

const navigation = [
  ['Info', '#info'],
  ['Scaletta', '#roadmap'],
  ['Musica', '#musica'],
  ['Beer Stories', '#beer-stories'],
  ['Extra', '#extra'],
];

const Hero: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-[var(--wedding-cream)]/15 bg-[var(--wedding-ink)]/95 px-5 backdrop-blur-md sm:px-8">
        <nav aria-label="Navigazione principale" className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-1 sm:gap-5">
          <a href="#home" className="shrink-0 font-rockidate text-lg text-[var(--wedding-cream)] sm:text-2xl" aria-label="Angie e Fabio, inizio pagina">A<span className="text-[var(--wedding-amber)]">&</span>F</a>
          <div className="hidden items-center gap-7 whitespace-nowrap py-3 md:flex">
            {navigation.map(([label, href]) => <a key={href} href={href} className="shrink-0 font-text text-xs font-bold uppercase tracking-[0.16em] text-[var(--wedding-cream)]/75 transition-colors hover:text-[var(--wedding-amber)]">{label}</a>)}
          </div>
          <motion.button
            type="button"
            className="flex size-11 items-center justify-center text-[var(--wedding-cream)] transition-colors hover:text-[var(--wedding-amber)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--wedding-amber)] md:hidden"
            aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 500, damping: 24 }}
          >
            {isMobileMenuOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </motion.button>
        </nav>
        <motion.div
          id="mobile-navigation"
          aria-hidden={!isMobileMenuOpen}
          inert={!isMobileMenuOpen}
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: 'easeOut' }}
          className={`absolute left-0 right-0 top-full overflow-hidden bg-[var(--wedding-ink)] px-5 md:hidden ${isMobileMenuOpen ? 'border-b border-[var(--wedding-cream)]/15 py-2' : 'pointer-events-none py-0'}`}
        >
          <nav aria-label="Navigazione mobile" className="mx-auto flex max-w-7xl flex-col">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setIsMobileMenuOpen(false)} className="flex min-h-12 items-center border-b border-[var(--wedding-cream)]/10 font-text text-xs font-bold uppercase tracking-[0.16em] text-[var(--wedding-cream)]/85 transition-colors last:border-0 hover:text-[var(--wedding-amber)]">
                {label}
              </a>
            ))}
          </nav>
        </motion.div>
      </header>
      <section id="home" className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 pb-16 pt-12 sm:px-8 md:min-h-[590px] md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:py-16" aria-labelledby="hero-title">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="font-text text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--wedding-amber)] sm:text-xs">Il nostro grande giorno · 29 maggio 2027</p>
          <h1 id="hero-title" className="mt-5 font-rockidate text-6xl leading-[0.93] tracking-[-0.04em] text-[var(--wedding-cream)] sm:text-7xl lg:text-[100px]">Angie <span className="text-[var(--wedding-amber)]">&</span><br className="hidden md:block" /> Fabio</h1>
          <p className="mx-auto mt-6 max-w-lg font-text text-base leading-7 text-[var(--wedding-cream)]/75 sm:text-lg sm:leading-8 md:mx-0">Ebbene sì, ci sposiamo. Entra nel backstage della nostra piccola grande storia.</p>
          <motion.a href="#roadmap" className="mt-8 inline-flex min-h-12 items-center gap-3 bg-[var(--wedding-amber)] px-5 font-text text-base font-bold uppercase tracking-[0.15em] text-[var(--wedding-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--wedding-cream)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--wedding-ink)]" whileHover={prefersReducedMotion ? undefined : { y: -2 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }} transition={{ type: 'spring', stiffness: 420, damping: 24 }}>Scopri la scaletta <ArrowDownRight aria-hidden="true" className="size-4" /></motion.a>
        </div>
        <div className="order-1 mx-auto w-full max-w-[540px] md:order-2 md:max-w-none">
          <motion.div className="relative border border-[var(--wedding-cream)]/30 bg-[var(--wedding-ink-2)] p-2 shadow-[12px_12px_0_var(--wedding-amber)] sm:p-3" whileHover={prefersReducedMotion ? undefined : { y: -4, rotate: -0.35 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }}>
            <Image src="/images/segnaletiche.png" alt="Illustrazione segnaletica di Angie e Fabio" width={1536} height={1024} priority className="h-auto w-full" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
