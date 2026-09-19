import type { Metadata } from "next";
import { Bungee, Epilogue, Lexend_Deca, Press_Start_2P, Share_Tech_Mono, Lavishly_Yours } from 'next/font/google';
import "./globals.css";

const lavishlyYours = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lavishly",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
});

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech-mono",
});

export const metadata: Metadata = {
  title: "The Wedding of Fabio & Angie",
  description: "Join us for the wedding of Fabio & Angie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lavishlyYours.variable} ${lexendDeca.variable} ${epilogue.variable} ${bungee.variable} ${pressStart.variable} ${shareTechMono.variable} font-lexend-deca`}>
        {children}
      </body>
    </html>
  );
}
