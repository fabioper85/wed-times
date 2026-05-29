import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full">
      <div
        className="flex min-h-[480px] w-full flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-4 sm:gap-8"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/hero-background.jpg")',
        }}
      >
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-rockidate text-white text-5xl leading-tight tracking-[-0.033em] sm:text-7xl md:text-8xl">
            Angie & Fabio
          </h1>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#d46211] text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em] font-lexend-deca">
          <span className="truncate">View Our Story</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
