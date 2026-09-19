import React from 'react';
import Countdown from './Countdown';

const Info: React.FC = () => {
  const weddingTimestamp = process.env.NEXT_PUBLIC_WEDDING_DATE_TIME_TICK
    ? parseInt(process.env.NEXT_PUBLIC_WEDDING_DATE_TIME_TICK, 10)
    : new Date('2027-05-29T15:00:00+02:00').getTime();
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-rockidate text-4xl sm:text-5xl text-[#181411]">Data</h3>
          <p className="font-lexend-deca text-2xl text-[#181411]">{dateString}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-rockidate text-4xl sm:text-5xl text-[#181411]">Orario</h3>
          <p className="font-lexend-deca text-2xl text-[#181411]">{timeString}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-rockidate text-4xl sm:text-5xl text-[#181411]">Location</h3>
          <p className="font-lexend-deca text-lg text-[#181411]">{location}</p>
        </div>
      </div>
      <Countdown target={weddingTimestamp} />
    </div>
  );
};

export default Info;
