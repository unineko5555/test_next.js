import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useCounter } from "@/src/hooks/useCounter";
import { useInputArray } from "@/src/hooks/useInputArray";
import { useColor } from "@/src/hooks/useColor";

const App = ({ Component, pageProps }: AppProps) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  useColor();

  return <Component {...pageProps} {...counter} {...inputArray} />;
}

export default App;