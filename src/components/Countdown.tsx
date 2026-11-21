'use client';

import { useEffect, useState } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (target: number): TimeLeft => {
  const difference = Math.max(target - Date.now(), 0);

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Countdown = ({ target }: { target: number }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const updateTimeLeft = () => setTimeLeft(getTimeLeft(target));

    updateTimeLeft();
    const interval = window.setInterval(updateTimeLeft, 1000);

    return () => window.clearInterval(interval);
  }, [target]);

  const units = [
    { label: 'Giorni', value: timeLeft?.days },
    { label: 'Ore', value: timeLeft?.hours },
    { label: 'Minuti', value: timeLeft?.minutes },
    { label: 'Secondi', value: timeLeft?.seconds },
  ];

  return (
    <section aria-label="Conto alla rovescia per il matrimonio" className="mt-12 border-y-2 border-[var(--wedding-cream)] px-4 py-8 text-center text-[var(--wedding-cream)]">
      <p className="font-lexend-deca text-xs font-semibold uppercase tracking-[0.28em] text-[var(--wedding-muted-dark)]">
        ARE YOU READY?!
      </p>
      <h2 className="mt-3 font-rockidate text-5xl text-[var(--wedding-cream)] sm:text-6xl">Ci vediamo tra</h2>
      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 sm:gap-x-8" aria-live="polite">
        {units.map(({ label, value }) => (
          <div key={label}>
            <span className={`block font-rockidate text-5xl font-normal leading-none tabular-nums sm:text-6xl ${label === 'Giorni' ? 'text-[var(--wedding-amber)]' : 'text-[var(--wedding-cream)]'}`}>
              {timeLeft ? String(value).padStart(2, '0') : '--'}
            </span>
            <span className="mt-3 block font-lexend-deca text-sm tracking-[0.18em] text-[var(--wedding-muted-dark)]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;

