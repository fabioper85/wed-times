import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f2f0] px-10 py-3">
      <div className="flex items-center gap-4 text-[#181411]">
        <div className="size-4">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="font-[family:var(--font-lexend-deca)] text-[#181411] text-lg font-bold leading-tight tracking-[-0.015em]">The Wedding of Fabio & Angie</h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="font-[family:var(--font-lexend-deca)] text-[#181411] text-sm font-medium leading-normal" href="#">Home</a>
          <a className="font-[family:var(--font-lexend-deca)] text-[#181411] text-sm font-medium leading-normal" href="#">RSVP</a>
          <a className="font-[family:var(--font-lexend-deca)] text-[#181411] text-sm font-medium leading-normal" href="#">Contact Us</a>
          <a className="font-[family:var(--font-lexend-deca)] text-[#181411] text-sm font-medium leading-normal" href="#">Wedding Blog</a>
          <a className="font-[family:var(--font-lexend-deca)] text-[#181411] text-sm font-medium leading-normal" href="#">Photos & Videos</a>
          <a className="font-[family:var(--font-lexend-deca)] text-[#181411] text-sm font-medium leading-normal" href="#">Guest Book</a>
        </div>
        <button className="font-[family:var(--font-lexend-deca)] flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f4f2f0] text-[#181411] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Login/Register</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
