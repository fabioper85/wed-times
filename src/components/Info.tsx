'use client';

import React from 'react';
import { Instagram } from 'lucide-react';
import Countdown from './Countdown';
import Providers from './Providers';
import BeerStories from './BeerStories';

const Info: React.FC = () => {
  // 16:00 in Italy on 29 May 2027 (CEST, UTC+02:00).
  // Keep this fixed to the confirmed wedding date instead of relying on a
  // potentially stale or differently formatted environment value.
  const weddingTimestamp = Date.UTC(2027, 4, 29, 14, 0, 0);
  const dateString = '29 maggio 2027';
  const timeString = '16:00';
  const location = 'Cascina Reale Cussanio a Fossano';
  const locationAddress = 'Cascina Reale Cussanio, Via S. Maria, 12045 Fossano CN';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress)}`;

  return (
    <div className="space-y-20 bg-[var(--wedding-ink)] pb-12 pt-2 text-[var(--wedding-cream)] sm:space-y-28 sm:pb-16">
      <Countdown target={weddingTimestamp} />

      <section id="info" className="mx-auto w-full max-w-6xl px-5 sm:px-8" aria-label="Data, orario e location">
        <div className="grid border-y border-[var(--wedding-cream)]/25 sm:grid-cols-3">
          <div className="border-b border-[var(--wedding-cream)]/20 py-6 sm:border-b-0 sm:border-r sm:px-7 sm:py-8">
            <p className="font-lexend-deca text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--wedding-amber)]">Data</p>
            <p className="mt-3 font-lexend-deca text-lg font-bold uppercase leading-snug tracking-[0.04em] text-[var(--wedding-cream)] sm:text-xl">{dateString}</p>
          </div>
          <div className="border-b border-[var(--wedding-cream)]/20 py-6 sm:border-b-0 sm:border-r sm:px-7 sm:py-8">
            <p className="font-lexend-deca text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--wedding-amber)]">Orario</p>
            <p className="mt-3 font-lexend-deca text-lg font-bold uppercase leading-snug tracking-[0.04em] text-[var(--wedding-cream)] sm:text-xl">Ore {timeString}</p>
          </div>
          <div className="py-6 sm:px-7 sm:py-8">
            <p className="font-lexend-deca text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--wedding-amber)]">Location · apri su Maps</p>
            <a href={mapsUrl} target="_blank" rel="noreferrer" aria-label={`Apri ${locationAddress} su Google Maps`} className="mt-3 inline-block font-lexend-deca text-base font-bold uppercase leading-snug tracking-[0.04em] text-[var(--wedding-cream)] underline decoration-[var(--wedding-amber)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--wedding-amber)] sm:text-lg">
              Cascina Reale Cussanio, Fossano
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-[0.72fr_1.28fr] md:items-start md:gap-12" aria-labelledby="spoiler-title">
        <div>
          <p className="font-lexend-deca text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--wedding-amber)]">Il giorno del matrimonio</p>
          <h2 id="spoiler-title" className="mt-2 font-rockidate text-5xl leading-tight text-[var(--wedding-cream)] sm:text-6xl">Qualche spoiler</h2>
        </div>
        <div className="font-lexend-deca text-sm leading-7 text-[var(--wedding-cream)]/75 sm:text-base sm:leading-8">
          <p>Unione civile con firma in Comune e rito simbolico: i genitori ci accompagneranno all’altare e le fedi passeranno di mano in mano tra gli invitati.</p>
          <p className="mt-4">Poi buffet open sitting con isole tematiche, pic-nic per i più piccoli e un grande giardino per ballare. Nessun dress code: porta solo un paio di scarpe comode di scorta.</p>
        </div>
      </section>

      <section id="roadmap" className="bg-[var(--wedding-cream)] px-5 py-12 text-[var(--wedding-ink)] sm:px-8 sm:py-16" aria-labelledby="wedding-roadmap-title">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-2 border-b border-[var(--wedding-ink)]/25 pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-lexend-deca text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--wedding-muted-cream)]">Il programma</p>
              <h2 id="wedding-roadmap-title" className="mt-1 font-rockidate text-5xl text-[var(--wedding-ink)] sm:text-6xl">Wedding roadmap</h2>
            </div>
            <p className="font-lexend-deca text-xs uppercase tracking-[0.16em] text-[var(--wedding-muted-cream)]">Una giornata da vivere insieme</p>
          </div>
          <ol className="mt-6 grid gap-px bg-[var(--wedding-ink)]/15 sm:grid-cols-2 lg:grid-cols-4" aria-label="Programma del matrimonio">
            {[
              { title: 'WE DO!', detail: 'Cerimonia', time: '17:00' },
              { title: 'WE EAT!', detail: 'Cena a buffet', time: '18:30' },
              { title: 'WE CAKE!', detail: 'Taglio torta', time: '21:30' },
              { title: 'WE PARTY!', detail: 'Open bar + DJ set', time: '22:30' },
            ].map(({ title, detail, time }, index) => (
              <li key={title} className="flex min-h-40 flex-col justify-between bg-[var(--wedding-cream)] p-5 sm:p-6">
                <div className="flex items-start justify-between">
                  <span className="font-rockidate text-3xl text-[var(--wedding-amber)]">0{index + 1}</span>
                  <time className="font-lexend-deca text-xs font-bold tabular-nums text-[var(--wedding-muted-cream)]" dateTime={`2027-05-29T${time}:00+02:00`}>{time}</time>
                </div>
                <div>
                  <p className="font-rockidate text-2xl text-[var(--wedding-ink)]">{title}</p>
                  <p className="mt-1 font-lexend-deca text-sm text-[var(--wedding-muted-cream)]">{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="musica" className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-2 md:items-center md:gap-16" aria-labelledby="music-title">
        <div>
          <p className="font-lexend-deca text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--wedding-amber)]">Il nostro motto</p>
          <h2 id="music-title" className="mt-4 max-w-xl font-rockidate text-4xl leading-tight text-[var(--wedding-cream)] sm:text-5xl">O andiamo a un concerto, o andiamo in moto, o andiamo a un concerto in moto.</h2>
        </div>
        <div className="border-l border-[var(--wedding-amber)] pl-6 sm:pl-8">
          <p className="font-lexend-deca text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--wedding-amber)]">Special guest live</p>
          <h3 className="mt-3 font-rockidate text-4xl leading-tight text-[var(--wedding-cream)] sm:text-5xl">Fratelli Pleasure Orchestra</h3>
          <p className="mt-4 font-lexend-deca text-sm leading-7 text-[var(--wedding-cream)]/70 sm:text-base sm:leading-8">Swing’n’Roll dal vivo e una selezione pop rock per una festa tutta da ballare: la nostra casa si chiama “al Riff”, il matrimonio non poteva suonare diverso.</p>
        </div>
      </section>

      <BeerStories />

      <Providers />

      <section
        className="mx-4 border-2 border-dashed border-[var(--wedding-cream)] bg-[var(--wedding-ink-2)] px-6 py-10 text-center sm:mx-auto sm:max-w-3xl sm:px-12"
        aria-labelledby="quizposi-title"
      >
        <div className="mx-auto max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--wedding-amber)]" style={{ fontFamily: '"Zen Dots", sans-serif' }}>
            Area in costruzione
          </p>
          <div className="mx-auto mt-5 text-7xl leading-none" role="img" aria-label="Segnale di pericolo">
            ⚠️
          </div>
          <h2 id="quizposi-title" className="mt-5 font-rockidate text-5xl uppercase leading-tight tracking-[-0.06em] text-[var(--wedding-cream)] sm:text-6xl">
            QuizPosi
          </h2>
          <p className="mt-6 text-2xl uppercase leading-8 text-[var(--wedding-amber)] sm:text-3xl" style={{ fontFamily: '"Audiowide", sans-serif' }}>
            Coming soon
          </p>
          <p className="mt-4 text-[17px] leading-8 text-[var(--wedding-cream)]/90 sm:text-lg" style={{ fontFamily: '"Audiowide", sans-serif' }}>
            Il quiz è ancora in fase di caricamento. Preparatevi a mettere alla prova la vostra conoscenza dei Perrace / Pacetta!
          </p>
        </div>
      </section>

      <section id="extra" className="mx-auto max-w-4xl px-5 text-center" aria-labelledby="extra-title">
        <h2 id="extra-title" className="font-rockidate text-5xl text-[var(--wedding-cream)] sm:text-6xl">
          Extra
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-8 font-lexend-deca text-[17px] leading-8 text-[var(--wedding-cream)] sm:text-lg">
          <p>
            Come dici? Ti sei perso il video “Save the Date”? Lo trovi qui di seguito{' '}
            <a
              href="https://www.instagram.com/reel/Dd4xtHzt-lJOkB5kSD_J9qsv6ut5GebxMo7neY0/?dlrf=MTQ3Mnd3anMycTltYQ=="
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold underline decoration-[var(--wedding-amber)] underline-offset-4 transition-opacity hover:opacity-80"
            >
              <Instagram className="size-5" strokeWidth={1.75} aria-hidden="true" />
              <span className="sr-only">Guarda il video Save the Date su Instagram</span>
              <span aria-hidden="true">Instagram</span>
            </a>
          </p>
          <p>
            Hai qualche foto del nostro matrimonio? Se hai piacere condividile con noi{' '}
            <a
              href="https://photos.app.goo.gl/KCquMSqc5SoVVF3z8"
              target="_blank"
              rel="noreferrer"
              aria-label="Condividi le foto del matrimonio"
              className="font-semibold underline decoration-[var(--wedding-amber)] underline-offset-4 transition-opacity hover:opacity-80"
            >
              qui
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Info;
