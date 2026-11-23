import React from 'react';

const Footer: React.FC = () => (
  <footer className="border-t border-[var(--wedding-cream)]/20 bg-[var(--wedding-ink-2)] px-5 py-8 text-center sm:py-10">
    <p className="font-rockidate text-3xl text-[var(--wedding-cream)] sm:text-4xl">Angie <span className="text-[var(--wedding-amber)]">&</span> Fabio</p>
    <p className="mt-3 font-text text-[10px] font-normal uppercase tracking-[0.16em] text-[var(--wedding-cream)]/60 sm:text-xs">29 maggio 2027 · Cascina Reale Cussanio, Fossano</p>
    <p className="mt-2 font-text text-[10px] uppercase tracking-[0.2em] text-[var(--wedding-amber)]">Grazie per esserci</p>
  </footer>
);

export default Footer;
