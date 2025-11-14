import React from 'react';

const Info: React.FC = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-lavishly text-3xl text-[#181411]">Data</h3>
          <p className="text-2xl font-bold text-[#181411]">September 14th, 2024</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-lavishly text-3xl text-[#181411]">Orario</h3>
          <p className="text-2xl font-bold text-[#181411]">4:00 PM</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-lavishly text-3xl text-[#181411]">Location</h3>
          <p className="text-lg text-[#181411]">The Grand Ballroom, 123 Main Street, Anytown, USA</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
