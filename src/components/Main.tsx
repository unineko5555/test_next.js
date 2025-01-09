import Image from "next/image";
import { Links } from "@/src/components/Links";
import { Headline } from "@/src/components/Headline";

interface props {
  page: string;
}

export function Main(props: props) {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
        />
        <Headline page={props.page}>
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">pages/{props.page}.js</code>
        </Headline>
        <Links />
    </main>
  );
}
