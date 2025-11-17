import React from 'react';

const Info: React.FC = () => {
  return (
    <div className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-lavishly text-5xl text-[#181411]">Data</h3>
          <p className="font-lexend-deca text-2xl text-[#181411]">May 29th, 2027</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-lavishly text-5xl text-[#181411]">Orario</h3>
          <p className="font-lexend-deca text-2xl text-[#181411]">5:00 PM</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-lavishly text-5xl text-[#181411]">Location</h3>
          <p className="font-lexend-deca text-lg text-[#181411]">Cascina Montena, Strada Montena, Fraz, 15020 Zenevreto AL</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
