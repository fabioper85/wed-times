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
      <section className="mx-auto max-w-3xl px-4 text-center" aria-labelledby="welcome-message-title">
        <h2 id="welcome-message-title" className="text-4xl leading-tight text-[var(--wedding-cream)] sm:text-5xl">
          <span className="font-lexend-deca text-[17px] leading-8 sm:text-lg">
            Ebbene sì Ladies and Gentlemen:
          </span>
          <br />
          <span className="font-rockidate text-5xl sm:text-6xl">Ci sposiamo! 🙂 ❤️</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-lexend-deca text-[17px] leading-8 text-[var(--wedding-cream)]/80 sm:text-lg">
          Nell’attesa di celebrare insieme il nostro grande giorno ti lasciamo la possibilità di curiosare in libertà in questo sito. Oltre alle informazioni essenziali relative all’evento troverai altro materiale inedito per immergerti nella nostra piccola grande storia. Buona esplorazione.
        </p>
      </section>

      <Countdown target={weddingTimestamp} />

      <div id="info" className="mx-auto mt-12 grid max-w-5xl grid-cols-1 border-2 border-[var(--wedding-cream)] text-center sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-3 border-b-2 border-dotted border-[var(--wedding-muted-cream)] bg-[var(--wedding-cream)] px-5 py-7 text-[var(--wedding-ink)] sm:border-b-0 sm:border-r-2 sm:border-dotted md:py-8">
          <h3 className="font-rockidate text-4xl text-[var(--wedding-ink)] sm:text-5xl">Data</h3>
          <p className="font-lexend-deca text-[17px] leading-8 text-[var(--wedding-cream)]/80 sm:text-lg">{dateString}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 border-b-2 border-dotted border-[var(--wedding-muted-cream)] bg-[var(--wedding-cream)] px-5 py-7 text-[var(--wedding-ink)] sm:border-b-0 sm:border-r-2 sm:border-dotted md:py-8">
          <h3 className="font-rockidate text-4xl text-[var(--wedding-ink)] sm:text-5xl">Orario</h3>
          <p className="font-lexend-deca text-[17px] leading-8 text-[var(--wedding-muted-cream)] sm:text-lg">{timeString}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 bg-[var(--wedding-amber)] px-5 py-7 text-[var(--wedding-ink)] md:py-8">
          <h3 className="font-rockidate text-4xl text-[var(--wedding-ink)] sm:text-5xl">Location</h3>
          <p className="font-lexend-deca text-[17px] leading-8 text-[var(--wedding-ink)] sm:text-lg">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[var(--wedding-ink)]/40 underline-offset-4 transition-opacity hover:opacity-80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--wedding-ink)]/60"
              aria-label={`Apri ${locationAddress} su Google Maps`}
            >
              {location}
            </a>
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-[880px] px-5 text-center" aria-labelledby="spoiler-title">
        <h2 id="spoiler-title" className="font-rockidate text-5xl text-[var(--wedding-cream)] sm:text-6xl">
          Qualche spoiler
        </h2>
        <div className="mt-8 font-lexend-deca text-[17px] leading-8 text-[var(--wedding-cream)]/80 sm:text-lg">
          <p>
            La nostra sarà un’unione civile e firmeremo ufficialmente in Comune. Insieme a te, il 29 Maggio,
            celebreremo quindi un rito simbolico. Verremo accompagnati “all’altare” da entrambi i nostri genitori e le
            nostre fedi passeranno di mano in mano tra gli invitati, accogliendo tutto l’affetto possibile.
          </p>
          <p className="mt-8">
            Dopo il “sì” ci piaceva l’idea di una serata dinamica, per cui sarà previsto un buffet “open sitting” (potrai
            quindi sederti dove vorrai 😉) con diverse isole tematiche e portate di cibo a scaglioni. I più piccini, invece,
            avranno un pic-nic tutto per loro e intrattenimento dedicato.
          </p>
          <p className="mt-8">
            Confidando in una splendida giornata di sole (toccamose va’!), avrai a disposizione all’interno del
            complesso un grande giardino dove chiacchierare, ridere e ballare insieme a noi.
          </p>
          <p className="mt-8">
            <strong>Non è richiesto uno specifico dress-code</strong>, desideriamo che i nostri ospiti si sentano a loro agio nei vestiti che
            preferiscono. Ciò che ci sentiamo di consigliare è un bel paio di scarpe comode di scorta! 🤘 💪
          </p>
          <p className="mt-8">
            Last, but not least: abbiamo cercato di rendere questa giornata il più etica possibile,
            scegliendo dove si poteva materiali riciclabili e biodegradabili. 🍀
          </p>
        </div>
      </section>

      <section id="roadmap" className="bg-[var(--wedding-cream)] px-5 py-12 text-[var(--wedding-ink)] sm:py-16" aria-labelledby="wedding-roadmap-title">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-lexend-deca text-sm uppercase tracking-[0.24em] text-[var(--wedding-muted-cream)]">
            Programma della giornata
          </p>
          <h2
            id="wedding-roadmap-title"
            className="mt-3 font-rockidate text-5xl text-[var(--wedding-ink)] sm:text-6xl"
          >
            Wedding roadmap
          </h2>
        </div>

        <ol className="mx-auto mt-8 max-w-3xl border-y-2 border-[var(--wedding-ink)]" aria-label="Programma del matrimonio">
          {[
            { title: 'WE DO!', detail: 'Cerimonia', time: '17:00', emoji: '💍' },
            { title: 'WE EAT!', detail: 'Cena a buffet', time: '18:30', emoji: '🍽️' },
            { title: 'WE CAKE!', detail: 'Taglio torta', time: '21:30', emoji: '🍰' },
            { title: 'WE PARTY!', detail: 'Open bar + DJ set', time: '22:30', emoji: '🎉' },
          ].map(({ title, detail, time, emoji }) => (
            <li key={title} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b-2 border-[var(--wedding-ink)] bg-[var(--wedding-cream)] px-3 py-5 text-center last:border-b-0 sm:gap-6 sm:px-8 sm:py-6">
              <div className="flex size-12 items-center justify-center rounded-full bg-[var(--wedding-roadmap-icon-bg)] text-2xl sm:size-14 sm:text-3xl" aria-hidden="true">
                {emoji}
              </div>
              <div>
                <p className="font-lexend-deca text-[17px] font-semibold tracking-[0.18em] text-[var(--wedding-muted-cream)] sm:text-lg">{title}</p>
                <p className="mt-0.5 font-lexend-deca text-[17px] text-[var(--wedding-ink)] sm:text-lg">{detail}</p>
              </div>
              <time className="font-lexend-deca text-lg font-semibold tabular-nums text-[var(--wedding-ink)] sm:text-xl" dateTime={`2027-05-29T${time}:00+02:00`}>{time}</time>
            </li>
          ))}
        </ol>
      </section>

      <figure className="mx-auto max-w-5xl px-0" aria-label="Illustrazione degli sposi che festeggiano">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rock_wedding-2nCjQY9B7VKwEOdjRt0oab8iq7wGXe.jpg"
          alt="Illustrazione degli sposi mentre festeggiano insieme"
          className="mx-auto h-auto w-full"
        />
      </figure>

      <section id="musica" className="mx-auto grid max-w-5xl gap-8 px-5 text-left md:grid-cols-2 md:items-center" aria-labelledby="music-title">
        <h2 id="music-title" className="font-rockidate text-5xl text-[var(--wedding-cream)] sm:text-6xl">
          La Musica
        </h2>
        <div className="flex flex-col gap-5 border-l-2 border-[var(--wedding-amber)] pl-5 font-lexend-deca text-[17px] leading-8 text-[var(--wedding-muted-dark)] sm:text-lg sm:leading-9">
          <p>
            Casa nostra è chiamata affettuosamente “al Riff” e chi ci conosce bene sa quanto entrambi amiamo la musica in tutte le sue sfumature. Insomma... <strong>o andiamo ad un concerto, o andiamo in moto, o andiamo ad un concerto in moto</strong>.
          </p>
          <p>
            Per il nostro matrimonio abbiamo scelto una selezione di brani pop rock da party scatenato con qualche piccola chicca extra, unita all’intrattenimento live dei <strong>Fratelli Pleasure Orchestra, una band esperta di Swing’n’Roll</strong> che siamo sicuri vi farà ballare e divertire da matti!
          </p>
          <p className="text-4xl leading-none" aria-label="Musica e ballo">
            🎶 💃 🕺 🪩 🎵
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
