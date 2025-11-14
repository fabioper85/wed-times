import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:flex-row sm:justify-around">
            <a className="font-[family:var(--font-lexend-deca)] text-[#897261] text-base font-normal leading-normal min-w-40" href="#">Home</a>
            <a className="font-[family:var(--font-lexend-deca)] text-[#897261] text-base font-normal leading-normal min-w-40" href="#">RSVP</a>
            <a className="font-[family:var(--font-lexend-deca)] text-[#897261] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
            <a className="font-[family:var(--font-lexend-deca)] text-[#897261] text-base font-normal leading-normal min-w-40" href="#">Wedding Blog</a>
            <a className="font-[family:var(--font-lexend-deca)] text-[#897261] text-base font-normal leading-normal min-w-40" href="#">Photos & Videos</a>
            <a className="font-[family:var(--font-lexend-deca)] text-[#897261] text-base font-normal leading-normal min-w-40" href="#">Guest Book</a>
          </div>
          <p className="font-[family:var(--font-lexend-deca)] text-[#897261] text-base font-normal leading-normal">© 2025 Fabio & Angie. All rights reserved.</p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
