import React from 'react';
import { CakeSlice, GlassWater, Gem, PartyPopper } from 'lucide-react';
import Countdown from './Countdown';

const Info: React.FC = () => {
  // 15:00 in Italy on 29 May 2027 (CEST, UTC+02:00).
  // Keep this fixed to the confirmed wedding date instead of relying on a
  // potentially stale or differently formatted environment value.
  const weddingTimestamp = Date.UTC(2027, 4, 29, 13, 0, 0);
  const weddingDate = new Date(weddingTimestamp);
  const dateString = weddingDate.toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/Rome',
  });
  const timeString = weddingDate.toLocaleTimeString('it-IT', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Rome',
  });
  const location = 'Cascina Reale Cussanio a Fossano';

  return (
    <div className="py-24">
      <section className="mx-auto max-w-3xl px-4 text-center" aria-labelledby="welcome-message-title">
        <h2 id="welcome-message-title" className="text-4xl leading-tight text-[#181411] sm:text-5xl">
          <span className="font-lexend-deca text-base leading-8 sm:text-lg">
            Ebbene sì Ladies and Gentlemen:
          </span>
          <br />
          <span className="font-rockidate text-5xl sm:text-6xl">Ci sposiamo! 🙂 ❤️</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-lexend-deca text-base leading-8 text-[#181411]/80 sm:text-lg">
          Nell’attesa di celebrare insieme il nostro grande giorno ti lasciamo la possibilità di curiosare in libertà in questo sito. Oltre alle informazioni essenziali relative all’evento troverai altro materiale inedito per immergerti nella nostra piccola grande storia. Buona esplorazione.
        </p>
      </section>

      <Countdown target={weddingTimestamp} />

      <div className="mt-20 grid grid-cols-1 gap-8 px-4 text-center md:grid-cols-3">
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-rockidate text-4xl text-[#181411] sm:text-5xl">Data</h3>
          <p className="font-lexend-deca text-base leading-8 text-[#181411]/80 sm:text-lg">{dateString}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-rockidate text-4xl text-[#181411] sm:text-5xl">Orario</h3>
          <p className="font-lexend-deca text-base leading-8 text-[#181411]/80 sm:text-lg">{timeString}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-rockidate text-4xl text-[#181411] sm:text-5xl">Location</h3>
          <p className="font-lexend-deca text-base leading-8 text-[#181411]/80 sm:text-lg">{location}</p>
        </div>
      </div>

      <section className="mx-auto mt-20 max-w-3xl px-4 text-left" aria-labelledby="spoiler-title">
        <h2 id="spoiler-title" className="font-rockidate text-5xl text-[#181411] sm:text-6xl">
          Qualche spoiler
        </h2>
        <div className="mt-8 font-lexend-deca text-base leading-8 text-[#181411]/80 sm:text-lg">
          <p>
            La nostra sarà un’unione civile e firmeremo ufficialmente in Comune. Insieme a te, il 29 Maggio,
            celebreremo quindi un rito simbolico. Verremo accompagnati “all’altare” da entrambi i nostri genitori e le
            nostre fedi passeranno di mano in mano tra gli invitati, accogliendo tutto l’affetto possibile.
          </p>
          <p className="mt-8">*FOTO SPOSI*</p>
          <p className="mt-8">Wedding Site</p>
          <p>Timer Contatore</p>
          <p className="mt-8">*CARICATURA DIGITALE “CASQUE’!”*</p>
          <p className="mt-8">
            Dopo il “sì” ci piaceva l’idea di una serata dinamica, per cui sarà previsto un buffet “open sitting” (potrai
            quindi sederti dove vorrai) con diverse isole tematiche e portate di cibo a scaglioni. I più piccini, invece,
            avranno un pic-nic tutto per loro e intrattenimento dedicato.
          </p>
          <p className="mt-8">
            Confidando in una splendida giornata di sole (toccamose va’!), avrai a disposizione all’interno del
            complesso un grande giardino dove chiacchierare, ridere e ballare insieme a noi.
          </p>
          <p className="mt-8">
            Non è richiesto uno specifico dress-code, desideriamo che i nostri ospiti si sentano a loro agio nei vestiti che
            preferiscono. Ciò che ci sentiamo di consigliare è un bel paio di scarpe comode di scorta!
          </p>
          <p className="mt-8">
            Ultimo ma non meno importante: abbiamo cercato di rendere questa giornata il più etica possibile,
            scegliendo dove si poteva materiali riciclabili e biodegradabili.
          </p>
        </div>
      </section>

      <section className="mt-20 px-4" aria-labelledby="wedding-roadmap-title">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-lexend-deca text-sm uppercase tracking-[0.24em] text-[#181411]/60">
            Programma della giornata
          </p>
          <h2
            id="wedding-roadmap-title"
            className="mt-3 font-rockidate text-5xl text-[#181411] sm:text-6xl"
          >
            Wedding roadmap
          </h2>
        </div>

        <ol className="mx-auto mt-10 grid max-w-3xl gap-4" aria-label="Programma del matrimonio">
          {[
            { title: 'WE DO!', detail: 'Cerimonia', time: '17:00', Icon: Gem },
            { title: 'WE EAT!', detail: 'Cena a buffet', time: '18:30', Icon: GlassWater },
            { title: 'WE CAKE!', detail: 'Taglio torta', time: '21:30', Icon: CakeSlice },
            { title: 'WE PARTY!', detail: 'Open bar + DJ set', time: '22:30', Icon: PartyPopper },
          ].map(({ title, detail, time, Icon }) => (
            <li
              key={title}
              className="grid grid-cols-[1fr_auto] items-center gap-5 rounded-2xl border border-[#181411]/10 bg-[#fffaf5] px-5 py-5 shadow-[0_8px_24px_rgba(24,20,17,0.06)] sm:grid-cols-[1fr_auto_auto] sm:px-7"
            >
              <div>
                <p className="font-lexend-deca text-xs font-semibold tracking-[0.18em] text-[#181411]/55">
                  {title}
                </p>
                <p className="mt-1 font-lexend-deca text-lg text-[#181411] sm:text-xl">{detail}</p>
              </div>
              <div className="flex size-14 items-center justify-center rounded-full bg-[#f0dfd2] text-[#181411]" aria-hidden="true">
                <Icon strokeWidth={1.5} className="size-7" />
              </div>
              <time className="col-start-1 row-start-2 font-lexend-deca text-2xl font-semibold tabular-nums text-[#181411] sm:col-start-auto sm:row-start-auto sm:text-3xl" dateTime={`2027-05-29T${time}:00+02:00`}>
                {time}
              </time>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Info;
