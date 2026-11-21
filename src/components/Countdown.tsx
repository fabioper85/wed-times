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
    <section aria-label="Conto alla rovescia per il matrimonio" className="mt-10 border-y border-[var(--wedding-cream)]/35 px-4 py-8 text-center text-[var(--wedding-cream)] sm:py-10">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-8" aria-live="polite">
        {units.map(({ label, value }) => (
          <div key={label}>
            <span className={`block font-rockidate text-6xl font-normal leading-none tabular-nums sm:text-7xl ${label === 'Giorni' ? 'text-[var(--wedding-amber)]' : 'text-[var(--wedding-cream)]'}`}>
              {timeLeft ? String(value).padStart(2, '0') : '--'}
            </span>
            <span className="mt-3 block font-lexend-deca text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--wedding-muted-dark)] sm:text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;

