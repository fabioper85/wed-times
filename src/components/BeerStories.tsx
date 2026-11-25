'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const stories = [
  ['1/xx', 'L’annuncio alla cumpa', '23 Nov 2026', 'La pesca del Babbo Natale Segreto 2025 ci ha offerto l’occasione di annunciare la fatidica decisione alla nostra “cumpa”, consapevoli di fornire nuovo materiale per il giro di scommesse clandestino.'],
  ['2/xx', 'Proposta indecente', '13 Feb 2026', 'Colmo di amore e di gastroenterite, consapevole del fatto che non toccherà minimamente una deliziosa cena già pagata, il buon Fabio si prepara alla fatidica proposta con un anello tutto speciale ed un discorso dolcissimo. Decisamente una serata che non dimenticheremo. <3'],
  ['3/xx', 'Stocazzamenti a mille', '29 Nov 2026', 'Una cena coreana a casa dei nostri amici Lia e Fabio si trasforma in un trionfo di annunci bellissimi. Ci sposiamo noi, si sposano loro, la nostra super Simo ha vinto il concorso statale e lei e Ste compreranno casa. Tutto è talmente bello che sembra divino (e infatti c’è pure Je Soo).'],
  ['4/xx', 'Paddock Menabrea', '15 Apr 2026', 'Volerei da te da Caaaselle fiiiino a Malpensaaa! (Ire, è il tuo turno nel quadrante. Sorry =D <3).'],
  ['5/xx', 'Il matto', '07 Nov 2026', 'A veder suonare gli Skyline al pub Otherside con Mauro e Giulia. Birra, musica dal vivo e ottimi amici... cosa volere di più?'],
  ['6/xx', '40 anni, sei Grand e Gross ormai', '03 Gen 2026', 'Sempre belle le cene con la cumpa, auguri Steeeee!'],
  ['7/xx', 'La scimmia ubriaca', '21 Apr 2026', 'Gli Smoking Monkey si scatenano in Via Baltea 3; Angie si gode la sua Corona Extra; Fabio scopre la tequila affumicata.'],
  ['8/xx', 'Una Ceres da 11km', '19 Apr 2026', 'Una domenica pomeriggio si trasforma in una bella passeggiata con gli amici fra sentieri, alberi abbracciati e topic di Andrea che fanno discutere i futuri sposi. L’aperitivo al Deja Vu è d’obbligo, la tisanina finale a casa di Maddy pure. <3'],
  ['9/xx', 'Kirin-Lina', '10 Apr 2026', 'Serata di sushi, lirica, chiacchiere e Pampero Especial con la scatenata Lina <3.'],
  ['10/xx', 'Christmas Aperi-Box 2025', '25 Dic 2025', 'Abbiamo scoperto il birrificio Troll durante la nostra minivacanza a Vernante e deciso di designare la loro linea di birre come prescelta per i nostri pensierini di Natale 2025. Ah! Abbiamo inoltre scoperto di possedere un innato talento nella produzione di taralli aromatizzati.'],
  ['11/xx', 'Su kantiamo tutti insieme!', '19 Mar 2026', 'Un pensierino sentito da parte di papà Nunzio verso il suo futuro genero, giusto per ribadire che deve trattare con i guanti la sua bambina. =D'],
  ['12/xx', 'Du’ stronze (e 4 amici al bar)', '28 Mar 2026', 'Giretto in centro e poi brindisi all’imminente rogito dei nostri ciaoooooo amiciiiiiiiiii <3'],
  ['13/xx', 'Balabiott e balapeños', '27 Feb 2026', 'Che fai, non lo usi all’ultimo giorno disponibile uno sconto di 5€ al pub dove hai conosciuto il tuo futuro marito? E che fai, non te la spari una cena in solitaria con il tuo quadernetto degli appunti? Come pensi che ti vengano altrimenti le idee geniali?!'],
  ['14/xx', '(Ca)Tarìììì', '18 Gen 2026', 'Un aperitivo siciliano di rinforzo dopo il Museo Egizio è obbligatorio. Anche perché al decimo “Ho fameee” della Vale o così o ti fai mummificare vivo xD'],
  ['15/xx', 'Atelier Menabrea', '09 Mag 2026', 'Giornata di amici e famiglia dalla mattina alla sera non-stop. La sposa trova il suo abito, lo sposo quasi. Raga siamo o non siamo due figoni?'],
  ['16/xx', 'Bitrex, arte e polpette', '15 Mag 2026', 'Le uscite tra colleghe che ci piacciono: mostra di Chiharu Shiota al MAO e, a seguire, un trittico di spaghetti con le polpette. Un bel pomeriggio con Hendrix e Manu da ricordare.'],
  ['17/xx', 'Ta-Ga-dan!', '22 Mag 2026', 'Angie, Fabio, Ire e Ser bimbe di Pepia (che in bottiglia non c’è ancora).'],
  ['18/xx', 'Entropia', '24 Mag 2026', 'Una delle parole preferite (e abusate) dallo sposo per ricordare il primo giro della sposa in compagnia delle super Litas!'],
  ['19/xx', 'Mille mele che cadono', '30 Mag 2026', 'Sidro post concertone dei Rockin’ 1000 in compagnia dei mitici Rebba e Tizi.'],
  ['20/xx', 'Habemus Celebrantes', '02 Giu 2026', 'Nel nostro pub con Val e Cata, grazie di cuore per aver accettato di celebrare il nostro rito. Vi vogliamo un mondo di bene.'],
  ['21/xx', 'Aspettando Ludovica <3', '07 Giu 2026', 'Un pomeriggio al parco insieme a Fabri e Sere per festeggiare la pupetta in arrivo.'],
  ['22/xx', 'Ginger’s 30', '01 Lug 2026', 'Cena giapponese da Akaiito e si festeggiano alla grande questi primi 30 anni, auguri al nostro super testimone Vins!'],
  ['23/xx', 'Litas, Lovers & Ipas', '05 Lug 2026', 'Giretto in moto al Pian della Mussa e scalata selvaggia di rotopalla.'],
  ['24/xx', 'Grazie al quarzo!', '12 Lug 2026', 'Famiglia Perretta: missione spiaggia libera di Noli.'],
  ['25/xx', 'Rock’n’Roll Litas', '15 Lug 2026', 'Dopocena di bagigie.'],
  ['26/xx', 'MiCala', '16 Lug 2026', 'Michela insospettabile guest-star della serata.'],
  ['27/xx', 'Vi interessa uno champagnino? – cit.', '18 Ago 2026', 'Giulio è un cuoricino ed ha pensato di regalarci questa straordinaria bottiglia da collezione dedicata ai bikers. Grazie di cuore!'],
  ['28/xx', 'Lasko da scoglio', '30 Ago 2026', 'Birretta condivisa tra noi sugli scogli di Pirano in Slovenia, una vacanza stupenda!'],
] as const;

export default function BeerStories() {
  const [openStory, setOpenStory] = useState<string | null>(null);
  const [showAllStories, setShowAllStories] = useState(false);

  return (
    <section id="beer-stories" className="-mx-4 bg-[var(--wedding-ink-2)] px-4 py-12 text-center sm:py-16" aria-labelledby="beer-stories-title">
      <h2 id="beer-stories-title" className="font-rockidate text-5xl text-[var(--wedding-cream)] sm:text-6xl">Le Beer Stories</h2>
      <p className="mx-auto mt-6 max-w-3xl font-text text-base leading-8 text-[var(--wedding-cream)]/75 sm:text-lg sm:leading-9">
        Le BeerStories nascono da un’idea della sposa, che ha deciso di conservare le bottiglie più significative dei mesi di preparazione al matrimonio per trasformarle in decorazioni luminose disseminate qui e là a Cascina Reale. Aguzza la vista in location per trovarne il più possibile e leggi qui sotto la storia di ogni birretta, potrebbe esserci anche la tua! &lt;3.
      </p>
      <div className="mx-auto mt-10 grid max-w-5xl gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
        {stories.slice(0, showAllStories ? stories.length : 6).map(([number, title, date, description]) => {
          const isOpen = openStory === number;
          return (
            <article key={number} className="border-2 border-[var(--wedding-cream)]">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`beer-story-${number.replace('/', '-')}`}
                onClick={() => setOpenStory(isOpen ? null : number)}
                className="flex min-h-14 w-full flex-col gap-2 px-4 py-4 text-left transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--wedding-amber)] sm:px-5"
              >
                <span className="flex w-full items-center gap-3">
                  <span className="shrink-0 font-text text-xs font-bold tracking-[0.12em] text-[var(--wedding-amber)]">{number}</span>
                  <span className="ml-auto font-text text-xs text-[var(--wedding-muted-dark)]">{date}</span>
                  <ChevronDown className={`size-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </span>
                <span className="line-clamp-2 w-full font-text text-base font-bold text-[var(--wedding-cream)] sm:text-lg">{title}</span>
              </button>
              <div id={`beer-story-${number.replace('/', '-')}`} hidden={!isOpen} className="px-4 pb-5 font-text text-base leading-7 text-[var(--wedding-muted-dark)] sm:px-5">
                <p className="sm:max-w-3xl">{description}</p>
              </div>
            </article>
          );
        })}
      </div>
      <button
        type="button"
        aria-expanded={showAllStories}
        onClick={() => setShowAllStories((current) => !current)}
        className="mt-8 min-h-12 border border-[var(--wedding-amber)] px-6 font-text text-base font-bold uppercase tracking-[0.2em] text-[var(--wedding-amber)] transition-colors hover:bg-[var(--wedding-amber)] hover:text-[var(--wedding-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--wedding-cream)]"
      >
        {showAllStories ? 'Mostra meno' : `Tutte le ${stories.length} storie`}
      </button>
    </section>
  );
}

