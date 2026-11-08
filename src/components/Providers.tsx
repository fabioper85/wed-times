'use client';

import { useState } from 'react';
import { Globe, Instagram, X } from 'lucide-react';

type ProviderLink = {
  tipoLink: string;
  link: string;
  icon: typeof Instagram;
  disabled: boolean;
};

type Provider = {
  category: string;
  name: string;
  links?: ProviderLink[];
};

const providers: Provider[] = [
  {
    category: 'Wedding Planner',
    name: 'Alma Teodora Event Manager',
    links: [
      {
        tipoLink: 'instagram',
        link: 'https://instagram.com/alma.events.management',
        icon: Instagram,
        disabled: true,
      },
    ],
  },
  {
    category: 'Location',
    name: 'Cascina Reale Cussanio',
    links: [
      {
        tipoLink: 'website',
        link: 'https://cascina-reale.it',
        icon: Globe,
        disabled: true,
      },
    ],
  },
  { category: 'Cibo', name: 'Giordano Catering' },
  { category: 'Torta Nuziale', name: 'Pasticceria Balla' },
  {
    category: 'Musica',
    name: 'Fratelli Pleasure Orchestra',
    links: [{ tipoLink: 'instagram', link: 'https://instagram.com/fratellipleasureorchestra', icon: Instagram, disabled: true }],
  },
  { category: 'Beverage', name: 'Marco Fara e ?' },
  { category: 'Fotografia', name: 'AD HOC FOTO (Mauro Franco)' },
  { category: 'Videomaking', name: 'Simone Rubinato' },
  {
    category: 'Fedi',
    name: 'Annag Collection',
    links: [{ tipoLink: 'instagram', link: 'https://instagram.com/annag_collection', icon: Instagram, disabled: true }],
  },
  {
    category: 'Partecipazioni',
    name: 'Sposinstyle',
    links: [{ tipoLink: 'website', link: 'https://sposinstyle.com', icon: Globe, disabled: true }],
  },
  { category: 'Make Up & Hair', name: '...' },
  { category: 'Decorazioni e Bouquet', name: '...' },
  { category: 'Confettata', name: "M&M'S" },
  { category: 'Abiti', name: 'Atelier Alpier' },
  {
    category: 'Accessori',
    name: 'Mediterranea Jewels',
    links: [{ tipoLink: 'website', link: 'https://mediterraneajewels.com', icon: Globe, disabled: true }],
  },
  {
    category: 'Caricature digitali',
    name: 'Felinia e Ribosio',
    links: [{ tipoLink: 'website', link: 'https://felinia.it', icon: Globe, disabled: true }],
  },
  {
    category: 'Viaggio di nozze',
    name: 'WeRoad',
    links: [{ tipoLink: 'website', link: 'https://weroad.com', icon: Globe, disabled: true }],
  },
];

export default function Providers() {
  const [selected, setSelected] = useState<Provider | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="mx-auto mt-24 max-w-5xl px-4" aria-labelledby="providers-title">
      <div className="text-center">
        <h2 id="providers-title" className="font-rockidate text-5xl text-[#181411] sm:text-6xl">
          I nostri fornitori
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-lexend-deca text-base leading-8 text-[#181411]/75 sm:text-lg">
          Le persone e le realtà che stanno rendendo speciale il nostro grande giorno.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-3">
        {providers.map((provider) => (
          <button
            key={provider.category}
            type="button"
            onClick={() => setSelected(provider)}
            onMouseEnter={() => setHoveredCategory(provider.category)}
            onMouseLeave={() => setHoveredCategory(null)}
            onFocus={() => setHoveredCategory(provider.category)}
            onBlur={() => setHoveredCategory(null)}
            className="font-lexend-deca text-sm uppercase tracking-[0.08em] text-[#181411] underline decoration-[#181411]/20 underline-offset-4 transition-[transform,color,text-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:decoration-[#181411]/60 sm:text-base focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#181411]/40"
            style={{
              transform: hoveredCategory === provider.category ? 'scale(1.08)' : undefined,
              color: hoveredCategory === provider.category ? 'var(--wedding-accent)' : undefined,
              textShadow: hoveredCategory === provider.category ? '0 6px 18px rgba(168, 68, 95, 0.2)' : undefined,
            }}
          >
            {provider.category}
          </button>
        ))}
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#181411]/55 px-4 backdrop-blur-sm"
          role="presentation"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="provider-dialog-title"
            className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-[#181411]/10 bg-white shadow-[0_24px_80px_rgba(24,20,17,0.2)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="h-2 bg-[var(--wedding-roadmap-icon-bg)]" />
            <div className="p-7 text-center sm:p-9">
              <button
                type="button"
                aria-label="Chiudi dettagli fornitore"
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 rounded-full border border-[#181411]/10 bg-white p-2 text-[#181411]/55 transition-colors hover:bg-[var(--wedding-roadmap-icon-bg)] hover:text-[#181411] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#181411]/40"
              >
                <X aria-hidden="true" className="size-4" />
              </button>
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[var(--wedding-roadmap-icon-bg)]/45 text-[var(--wedding-accent)]">
                <span className="font-rockidate text-2xl" aria-hidden="true">&amp;</span>
              </div>
              <p className="mt-5 font-lexend-deca text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#181411]/50">
                {selected.category}
              </p>
              <h3 id="provider-dialog-title" className="mt-3 font-lexend-deca text-2xl font-semibold leading-tight text-[#181411] sm:text-3xl">
                {selected.name}
              </h3>
              <div className="mx-auto mt-5 h-px w-12 bg-[var(--wedding-accent)]/40" />
              {selected.links?.length ? (
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {selected.links.map(({ tipoLink, link, icon: Icon }) => (
                    <a
                      key={`${selected.category}-${tipoLink}`}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${tipoLink} di ${selected.name}`}
                      className="inline-flex size-12 items-center justify-center rounded-2xl border border-[#181411]/10 bg-[#fffdf4] text-[#181411] shadow-[0_4px_12px_rgba(24,20,17,0.06)] transition-all hover:-translate-y-0.5 hover:border-[var(--wedding-accent)]/40 hover:bg-[var(--wedding-roadmap-icon-bg)]/45 hover:text-[var(--wedding-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--wedding-accent)]"
                    >
                      <Icon aria-hidden="true" className="size-5" />
                      <span className="sr-only">{tipoLink}</span>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-6 font-lexend-deca text-sm text-[#181411]/65">
                  Link in arrivo
                </p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
