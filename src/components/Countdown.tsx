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
    <section aria-label="Conto alla rovescia per il matrimonio" className="px-4 py-6 text-center text-[var(--wedding-cream)] sm:py-8">
      <h2 className="mb-8 font-rockidate text-4xl leading-tight text-[var(--wedding-cream)] sm:text-5xl">CI VEDIAMO TRA</h2>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-10" aria-live="off">
        {units.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <span className={`font-text text-7xl font-bold leading-none tracking-[-0.07em] tabular-nums sm:text-8xl lg:text-[104px] ${label === 'Giorni' ? 'text-[var(--wedding-amber)]' : 'text-[var(--wedding-cream)]'}`}>
              {timeLeft ? String(value).padStart(2, '0') : '--'}
            </span>
            <span className="mt-3 font-text text-xs font-bold uppercase tracking-[0.2em] text-[var(--wedding-muted-dark)] sm:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;

