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
  const [hasMounted, setHasMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setHasMounted(true);

    const updateTimeLeft = () => setTimeLeft(getTimeLeft(target));

    updateTimeLeft();
    const interval = window.setInterval(updateTimeLeft, 1000);

    return () => window.clearInterval(interval);
  }, [target]);

  const units = [
    { label: 'Giorni', value: timeLeft.days },
    { label: 'Ore', value: timeLeft.hours },
    { label: 'Minuti', value: timeLeft.minutes },
    { label: 'Secondi', value: timeLeft.seconds },
  ];

  return (
    <section aria-label="Conto alla rovescia per il matrimonio" className="mt-16 border-t border-[#e8e0d9] pt-12 text-center">
      <p className="font-lexend-deca text-xs font-semibold uppercase tracking-[0.28em] text-[#897261]">
        Manca sempre meno
      </p>
      <h2 className="mt-3 font-rockidate text-5xl text-[#181411] sm:text-6xl">Ci vediamo tra</h2>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5" aria-live="polite">
        {units.map(({ label, value }) => (
          <div key={label} className="rounded-2xl bg-[#f8f5f2] px-3 py-5 shadow-sm ring-1 ring-[#eee6df]">
            <span className="block font-lexend-deca text-3xl font-semibold tabular-nums text-[#181411] sm:text-4xl">
              {hasMounted ? String(value).padStart(2, '0') : '--'}
            </span>
            <span className="mt-2 block font-lexend-deca text-xs uppercase tracking-[0.18em] text-[#897261]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;

