'use client';

import { useState } from 'react';
import { Instagram, X } from 'lucide-react';

type Provider = {
  category: string;
  name: string;
  href?: string;
};

const providers: Provider[] = [
  { category: 'Wedding Planner', name: 'Alma Teodora Event Manager' },
  { category: 'Location', name: 'Cascina Reale Cussanio' },
  { category: 'Cibo', name: 'Giordano Catering' },
  { category: 'Torta Nuziale', name: 'Pasticceria Balla' },
  { category: 'Musica', name: 'Fratelli Pleasure Orchestra' },
  { category: 'Beverage', name: 'Marco Fara e ?' },
  { category: 'Fotografia', name: 'AD HOC FOTO (Mauro Franco)' },
  { category: 'Videomaking', name: 'Simone Rubinato' },
  { category: 'Fedi', name: 'Annag Collection' },
  { category: 'Partecipazioni', name: 'Sposinstyle' },
  { category: 'Make Up & Hair', name: '...' },
  { category: 'Decorazioni e Bouquet', name: '...' },
  { category: 'Confettata', name: "M&M'S" },
  { category: 'Abiti', name: 'Atelier Alpier' },
  { category: 'Accessori', name: 'Mediterranea Jewels' },
  { category: 'Caricature digitali', name: 'Felinia e Ribosio' },
  { category: 'Viaggio di nozze', name: 'WeRoad' },
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#181411]/45 px-4"
          role="presentation"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="provider-dialog-title"
            className="relative w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-2xl sm:p-9"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Chiudi dettagli fornitore"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-[#181411]/60 transition-colors hover:bg-[#f1e7a9] hover:text-[#181411] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#181411]/40"
            >
              <X aria-hidden="true" />
            </button>
            <p className="font-lexend-deca text-xs font-semibold uppercase tracking-[0.18em] text-[#181411]/55">
              {selected.category}
            </p>
            <h3 id="provider-dialog-title" className="mt-4 font-lexend-deca text-2xl font-semibold text-[#181411]">
              {selected.name}
            </h3>
            {selected.href ? (
              <a
                href={selected.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-lexend-deca text-sm text-[#181411] underline underline-offset-4"
              >
                <Instagram aria-hidden="true" /> Instagram
              </a>
            ) : (
              <p className="mt-6 font-lexend-deca text-sm text-[#181411]/65">
                Link in arrivo
              </p>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
