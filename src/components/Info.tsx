'use client';

import React from 'react';
import { Instagram, Star } from 'lucide-react';
import Countdown from './Countdown';
import Providers from './Providers';
import BeerStories from './BeerStories';

const Info: React.FC = () => {
  // 16:00 in Italy on 29 May 2027 (CEST, UTC+02:00).
  // Keep this fixed to the confirmed wedding date instead of relying on a
  // potentially stale or differently formatted environment value.
  const weddingTimestamp = Date.UTC(2027, 4, 29, 14, 0, 0);
  const weddingDate = new Date(weddingTimestamp);
  const dateString = new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Rome',
  }).format(weddingDate);
  const weddingDateForCopy = new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',
    month: 'long',
    timeZone: 'Europe/Rome',
  }).format(weddingDate);
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
            <p className="font-text text-xs font-bold uppercase tracking-[0.24em] text-[var(--wedding-amber)] sm:text-sm">Data</p>
            <p className="mt-3 font-text text-xl font-bold uppercase leading-snug tracking-[0.04em] text-[var(--wedding-cream)] sm:text-2xl">{dateString}</p>
          </div>
          <div className="border-b border-[var(--wedding-cream)]/20 py-6 sm:border-b-0 sm:border-r sm:px-7 sm:py-8">
            <p className="font-text text-xs font-bold uppercase tracking-[0.24em] text-[var(--wedding-amber)] sm:text-sm">Orario</p>
            <p className="mt-3 font-text text-xl font-bold uppercase leading-snug tracking-[0.04em] text-[var(--wedding-cream)] sm:text-2xl">Ore {timeString}</p>
          </div>
          <div className="bg-[var(--wedding-accent)] px-5 py-6 text-[#181411] sm:px-7 sm:py-8">
            <p className="font-text text-xs font-bold uppercase tracking-[0.2em] text-[#181411] sm:text-sm">Location · apri su Maps</p>
            <a href={mapsUrl} target="_blank" rel="noreferrer" aria-label={`Apri ${locationAddress} su Google Maps`} className="mt-3 inline-block font-text text-lg font-bold uppercase leading-snug tracking-[0.04em] text-[#181411] underline decoration-[#181411] decoration-1 underline-offset-4 transition-opacity hover:opacity-70 sm:text-xl">
              Cascina Reale Cussanio, Fossano
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-[0.72fr_1.28fr] md:items-start md:gap-12" aria-labelledby="spoiler-title">
        <div>
          <p className="font-text text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--wedding-amber)]">Il giorno del matrimonio</p>
          <h2 id="spoiler-title" className="mt-2 font-text text-5xl font-bold leading-tight text-[var(--wedding-cream)] sm:text-6xl">Qualche Spoiler</h2>
        </div>
        <div className="space-y-4 font-text text-base leading-7 text-[var(--wedding-cream)]/75 sm:space-y-6 sm:leading-8">
          <p>
            La nostra sarà un’unione civile e firmeremo ufficialmente in Comune. Insieme a te, il {weddingDateForCopy},
            celebreremo quindi un rito simbolico. Verremo accompagnati “all’altare” da entrambi i nostri genitori e le
            nostre fedi passeranno di mano in mano tra gli invitati, accogliendo tutto l’affetto possibile.
          </p>
          <p>
            Dopo il “sì” ci piaceva l’idea di una serata dinamica, per cui sarà previsto un buffet “open sitting”
            (potrai quindi sederti dove vorrai) con diverse isole tematiche e portate di cibo a scaglioni. I più piccini,
            invece, avranno un pic-nic tutto per loro e intrattenimento dedicato.
          </p>
          <p>
            Confidando in una splendida giornata di sole (toccamose va’!), avrai a disposizione all’interno del
            complesso un grande giardino dove chiacchierare, ridere e ballare insieme a noi.
          </p>
          <p className="bg-[var(--wedding-accent)] p-5 text-[var(--wedding-ink)] sm:p-6">
            <strong>Non è richiesto uno specifico dress-code</strong>, desideriamo che i nostri ospiti si sentano a loro
            agio nei vestiti che preferiscono. Ciò che ci sentiamo di consigliare è un bel paio di scarpe comode di scorta!
          </p>
          <p>
            Last, but not least: abbiamo cercato di rendere questa giornata il più etica possibile, scegliendo dove si
            poteva materiali riciclabili e biodegradabili.
          </p>
        </div>
      </section>

      <section id="roadmap" className="bg-[var(--wedding-cream)] px-5 py-12 text-[var(--wedding-ink)] sm:px-8 sm:py-16" aria-labelledby="wedding-roadmap-title">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col justify-between gap-2 border-b border-[var(--wedding-ink)]/25 pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-text text-xs font-bold uppercase tracking-[0.24em] text-[var(--wedding-muted-cream)] sm:text-sm">Programma della giornata</p>
              <h2 id="wedding-roadmap-title" className="mt-4 font-rockidate text-5xl leading-tight text-[var(--wedding-ink)] sm:mt-5 sm:text-6xl">Wedding Roadmap</h2>
            </div>
          </div>
          <ol className="mt-10 grid grid-cols-1 lg:grid-cols-5" aria-label="Programma del matrimonio">
            {[
              { title: 'WE MEET!', detail: 'Ritrovo', time: '16.00' },
              { title: 'WE DO!', detail: 'Cerimonia', time: '17:00' },
              { title: 'WE EAT!', detail: 'Cena a buffet', time: '18:30' },
              { title: 'WE CAKE!', detail: 'Taglio torta', time: '21:30' },
              { title: 'WE PARTY!', detail: 'Open bar + DJ set', time: '22:30' },
            ].map(({ title, detail, time }, index) => (
              <li key={title} className="relative border-l-2 border-[var(--wedding-ink)] px-6 pb-8 pt-1 last:border-l-transparent lg:min-h-64 lg:border-l-0 lg:border-t-2 lg:px-5 lg:pb-4 lg:pt-8">
                <span aria-hidden="true" className="absolute -left-[18px] top-0 flex size-9 items-center justify-center lg:-top-[18px] lg:left-0">
                  <Star className="absolute size-9 fill-[var(--wedding-accent)] text-[var(--wedding-accent)]" strokeWidth={1.5} />
                  <span className="relative font-text text-xs font-bold leading-none text-[var(--wedding-ink)]">{index + 1}</span>
                </span>
                <time className="font-text text-5xl font-bold leading-none tracking-[-0.06em] tabular-nums text-[var(--wedding-amber)] sm:text-6xl" dateTime={`2027-05-29T${time.replace('.', ':')}:00+02:00`}>{time}</time>
                <div className="pt-5">
                  <p className="font-lexend-deca text-lg font-bold tracking-[0.08em] text-[var(--wedding-ink)] sm:text-xl">{title}</p>
                  <p className="mt-1 font-text text-lg text-[var(--wedding-muted-cream)]">{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="musica" className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-2 md:items-start md:gap-16" aria-labelledby="music-title">
        <div>
          <h2 id="music-title" className="font-rockidate text-5xl leading-tight text-[var(--wedding-cream)] sm:text-6xl">La Musica</h2>
          <p className="mt-6 font-text text-base leading-8 text-[var(--wedding-cream)]/75 sm:text-lg sm:leading-9">
            Casa nostra è chiamata affettuosamente “al Riff” e chi ci conosce bene sa quanto entrambi amiamo la musica in tutte le sue sfumature. Insomma... <strong>o andiamo ad un concerto, o andiamo in moto, o andiamo ad un concerto in moto</strong>.
          </p>
        </div>
        <div className="bg-[var(--wedding-accent)] p-5 text-[var(--wedding-ink)] sm:p-7">
          <p className="font-text text-base leading-8 text-[var(--wedding-ink)]/80 sm:text-lg sm:leading-9">
            Per il nostro matrimonio abbiamo scelto una selezione di brani pop rock da party scatenato con qualche piccola chicca extra, unita all’intrattenimento live dei
          </p>
          <p className="mt-6 font-text text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--wedding-ink)]">Special Guest live</p>
          <h3 className="mt-3 font-rockidate text-4xl leading-tight text-[var(--wedding-ink)] sm:text-5xl">Fratelli Pleasure Orchestra</h3>
          <p className="mt-4 font-text text-base leading-8 text-[var(--wedding-ink)]/80 sm:text-lg sm:leading-9">
            Una band esperta di Swing’n’Roll che siamo sicuri vi farà ballare e divertire da matti!
          </p>
        </div>
      </section>

      <BeerStories />

      <Providers />

      <section
        className="mx-4 border-2 border-dashed border-[var(--wedding-cream)] bg-[var(--wedding-ink-2)] px-6 py-10 text-center sm:mx-auto sm:max-w-3xl sm:px-12"
        aria-labelledby="quizposi-title"
      >
        <div className="mx-auto max-w-xl">
          <p className="font-text text-xs uppercase tracking-[0.2em] text-[var(--wedding-amber)]">
            Area in costruzione
          </p>
          <div className="mx-auto mt-5 text-7xl leading-none" role="img" aria-label="Segnale di pericolo">
            ⚠️
          </div>
          <h2 id="quizposi-title" className="mt-5 font-rockidate text-5xl uppercase leading-tight tracking-[-0.06em] text-[var(--wedding-cream)] sm:text-6xl">
            QuizPosi
          </h2>
          <p className="mt-6 font-text text-2xl uppercase leading-8 text-[var(--wedding-amber)] sm:text-3xl">
            Coming soon
          </p>
          <p className="mt-4 font-text text-[17px] leading-8 text-[var(--wedding-cream)]/90 sm:text-lg">
            Il quiz è ancora in fase di caricamento. Preparatevi a mettere alla prova la vostra conoscenza dei Perrace / Pacetta!
          </p>
        </div>
      </section>

      <section id="extra" className="mx-auto max-w-4xl px-5 text-center" aria-labelledby="extra-title">
        <h2 id="extra-title" className="font-rockidate text-5xl text-[var(--wedding-cream)] sm:text-6xl">
          Extra
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-8 font-text text-[17px] leading-8 text-[var(--wedding-cream)] sm:text-lg">
          <p>
            Come dici? Ti sei perso il video “Save the Date”? Lo trovi qui di seguito{' '}
            <a
              href="https://www.instagram.com/reel/Dd4xtHzt-lJOkB5kSD_J9qsv6ut5GebxMo7neY0/?dlrf=MTQ3Mnd3anMycTltYQ=="
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-bold underline decoration-[var(--wedding-amber)] underline-offset-4 transition-opacity hover:opacity-80"
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
              className="font-bold underline decoration-[var(--wedding-amber)] underline-offset-4 transition-opacity hover:opacity-80"
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
