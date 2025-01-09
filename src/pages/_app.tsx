import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useCounter } from "@/src/hooks/useCounter";
import { useInputArray } from "@/src/hooks/useInputArray";
import { useBglightBlue } from "@/src/hooks/useBglightBlue";

export default function App({ Component, pageProps }: AppProps) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBglightBlue();

  return <Component {...pageProps} {...counter} {...inputArray} />;
}
