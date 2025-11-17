import React from 'react';

const Info: React.FC = () => {
  const weddingTimestamp = process.env.NEXT_PUBLIC_WEDDING_DATE_TIME_TICK 
    ? parseInt(process.env.NEXT_PUBLIC_WEDDING_DATE_TIME_TICK) 
    : Date.now();
  const weddingDate = new Date(weddingTimestamp);
  
  // Format date as "Month Day, Year"
  const dateString = weddingDate.toLocaleDateString('it-IT', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  // Format time as "HH:MM"
  const timeString = weddingDate.toLocaleTimeString('it-IT', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  const location = process.env.NEXT_PUBLIC_WEDDING_LOCATION_ADDRESS || 'Location TBD';

  return (
    <div className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-lavishly text-5xl text-[#181411]">Data</h3>
          <p className="font-lexend-deca text-2xl text-[#181411]">{dateString}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-lavishly text-5xl text-[#181411]">Orario</h3>
          <p className="font-lexend-deca text-2xl text-[#181411]">{timeString}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-lavishly text-5xl text-[#181411]">Location</h3>
          <p className="font-lexend-deca text-lg text-[#181411]">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
