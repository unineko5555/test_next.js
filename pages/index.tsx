import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { use, useEffect } from "react";
import { useCallback } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
