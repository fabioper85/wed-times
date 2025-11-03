"use client";

import { useSearchParams } from "next/navigation";

export default function Welcome() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="flex flex-col items-center justify-center p-4 w-full max-w-md mx-auto">
        <div className="w-full text-center mt-12 mb-6">
          <h1 className="text-[#181112] dark:text-white tracking-light text-[32px] font-bold leading-tight pb-3 pt-6">
            Benvenuto, {name}!
          </h1>
        </div>
      </div>
    </div>
  );
}
