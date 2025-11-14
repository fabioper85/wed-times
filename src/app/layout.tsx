import type { Metadata } from "next";
import { Lavishly_Yours, Lexend_Deca, Epilogue } from "next/font/google";
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
      <body className={`${lavishlyYours.variable} ${lexendDeca.variable} ${epilogue.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
