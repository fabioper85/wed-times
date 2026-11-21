import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="grid w-full items-center gap-8 px-5 py-10 text-center sm:px-8 md:grid-cols-2 md:gap-10 md:px-12 md:py-16" aria-labelledby="hero-title">
      <h1 id="hero-title" className="order-2 px-4 pb-4 pt-2 font-rockidate text-5xl leading-tight tracking-[-0.033em] text-[var(--wedding-cream)] sm:text-6xl md:order-1 md:text-left md:text-7xl lg:text-8xl">
        Angie &amp; Fabio
      </h1>
      <div className="order-1 mx-auto w-full max-w-[75%] overflow-hidden border-[3px] border-[var(--wedding-cream)] bg-[var(--wedding-ink-2)] p-3 sm:max-w-[80%] md:order-2 md:max-w-full md:rotate-2">
        <Image
          src="/images/segnaletiche.png"
          alt="Illustrazione segnaletica di Angie e Fabio"
          width={1536}
          height={1024}
          priority
          className="h-auto w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
