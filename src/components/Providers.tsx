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
    <section id="fornitori" className="mx-auto max-w-5xl px-4 py-10" aria-labelledby="providers-title">
      <div className="text-center">
        <h2 id="providers-title" className="font-rockidate text-5xl text-[var(--wedding-cream)] sm:text-6xl">
          I nostri Fornitori
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-text text-base leading-8 text-[var(--wedding-cream)]/75 sm:text-lg">
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
            className="min-h-11 border border-[var(--wedding-cream)] px-4 py-2 font-text text-base tracking-[0.08em] text-[var(--wedding-cream)] transition-opacity hover:opacity-80 sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--wedding-amber)]"
            style={{
              transform: hoveredCategory === provider.category ? 'scale(1.08)' : undefined,
              color: hoveredCategory === provider.category ? 'var(--wedding-accent)' : undefined,
              textShadow: hoveredCategory === provider.category ? '0 6px 18px rgba(251, 198, 66, 0.2)' : undefined,
            }}
          >
            {provider.category}
          </button>
        ))}
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--wedding-ink)]/85 px-4 backdrop-blur-sm"
          role="presentation"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="provider-dialog-category"
            className="relative w-full max-w-md overflow-hidden border-2 border-[var(--wedding-cream)] bg-[var(--wedding-ink-2)] text-[var(--wedding-cream)] shadow-[8px_8px_0_var(--wedding-amber)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="h-2 bg-[var(--wedding-amber)]" />
            <div className="p-6 text-center sm:p-8">
              <button
                type="button"
                aria-label="Chiudi dettagli fornitore"
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 border-2 border-[var(--wedding-cream)] bg-[var(--wedding-ink-2)] p-2 text-[var(--wedding-cream)] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--wedding-amber)]"
              >
                <X aria-hidden="true" className="size-4" />
              </button>
              <h3 id="provider-dialog-category" className="font-lexend-deca text-sm font-bold uppercase tracking-[0.22em] text-[var(--wedding-cream)]/55">
                {selected.category}
              </h3>
              <p className="mt-2 font-lexend-deca text-3xl font-bold leading-tight text-[var(--wedding-cream)] sm:text-4xl">
                {selected.name}
              </p>
              <div className="mx-auto mt-4 h-px w-12 bg-[var(--wedding-accent)]/40" />
              {selected.links?.length ? (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {selected.links.map(({ tipoLink, link, icon: Icon }) => (
                    <a
                      key={`${selected.category}-${tipoLink}`}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${tipoLink} di ${selected.name}`}
                      className="inline-flex size-12 items-center justify-center border-2 border-[var(--wedding-cream)] bg-[var(--wedding-ink)] text-[var(--wedding-cream)] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--wedding-accent)]"
                    >
                      <Icon aria-hidden="true" className="size-5" />
                      <span className="sr-only">{tipoLink}</span>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-4 font-text text-base text-[var(--wedding-cream)]/65">
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
