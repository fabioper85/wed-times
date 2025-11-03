"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleContinue = () => {
    router.push(`/welcome?name=${name}`);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col items-center bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="flex flex-col items-center justify-center p-4 w-full max-w-md mx-auto">
        <div className="w-full text-center mt-12 mb-6">
          <h1 className="text-[#181112] dark:text-white tracking-light text-[32px] font-bold leading-tight pb-3 pt-6">
            Benvenuti al matrimonio di Anna & Marco
          </h1>
          <p className="text-[#181112] dark:text-gray-300 text-base font-normal leading-normal pb-3 pt-1">
            Identificati per iniziare a condividere i tuoi ricordi.
          </p>
        </div>
        <div className="w-full px-4 py-3">
          <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#f4f0f1] dark:bg-gray-700/50 text-[#181112] dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em]">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25C22.56 11.45 22.49 10.68 22.36 9.92H12V14.4H18.06C17.75 16.03 16.91 17.43 15.61 18.29V21.1H19.46C21.45 19.24 22.56 16.08 22.56 12.25Z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23C14.97 23 17.47 22.02 19.46 20.4L15.61 17.59C14.61 18.25 13.38 18.67 12 18.67C9.27 18.67 6.94 16.88 6.1 14.48H2.14V17.38C4.09 20.73 7.72 23 12 23Z"
                fill="#34A853"
              ></path>
              <path
                d="M6.1 14.48C5.87 13.79 5.73 13.05 5.73 12.27C5.73 11.49 5.87 10.75 6.1 10.06V7.16H2.14C1.43 8.58 1 10.36 1 12.27C1 14.18 1.43 15.96 2.14 17.38L6.1 14.48Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.88C13.48 5.88 14.78 6.37 15.82 7.32L19.53 3.61C17.47 1.76 14.97 0.75 12 0.75C7.72 0.75 4.09 3.27 2.14 6.62L6.1 9.52C6.94 7.12 9.27 5.88 12 5.88Z"
                fill="#EA4335"
              ></path>
            </svg>
            <span className="truncate">Accedi con Google</span>
          </button>
        </div>
        <p className="text-[#896168] dark:text-gray-400 text-sm font-normal leading-normal py-4 px-4 text-center">
          oppure
        </p>
        <div className="w-full px-4 py-3">
          <div className="flex w-full flex-col items-stretch gap-4">
            <label className="flex flex-col w-full">
              <p className="text-[#181112] dark:text-white text-base font-medium leading-normal pb-2">
                Il tuo nome o nickname
              </p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181112] dark:text-white focus:outline-0 focus:ring-0 border border-[#e6dbdd] dark:border-gray-600 bg-white dark:bg-background-dark focus:border-primary dark:focus:border-primary h-14 placeholder:text-[#896168] dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                placeholder="Es. Mario Rossi"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <button
              className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-[0.015em]"
              onClick={handleContinue}
            >
              <span className="truncate">Continua</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
