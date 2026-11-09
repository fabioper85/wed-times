import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full text-center" aria-labelledby="hero-title">
      <div className="w-full overflow-hidden bg-[#fffaf5] px-0 sm:px-8 md:px-12 lg:px-16">
        <Image
          src="/images/segnaletiche.png"
          alt="Illustrazione segnaletica di Angie e Fabio"
          width={1536}
          height={1024}
          priority
          className="h-auto w-full"
        />
      </div>
      <h1 id="hero-title" className="px-4 pb-8 pt-12 font-rockidate text-5xl leading-tight tracking-[-0.033em] text-[#181411] sm:pb-10 sm:pt-14 sm:text-7xl md:text-8xl">
        Angie &amp; Fabio
      </h1>
    </section>
  );
};

export default Hero;
