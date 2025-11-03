import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Login Matrimonio",
  description: "Benvenuti al matrimonio di Anna & Marco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="light">
      <body
        className={`${plusJakartaSans.variable} bg-background-light dark:bg-background-dark font-display text-[#181112] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
