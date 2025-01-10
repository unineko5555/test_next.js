import Image from "next/image";
import { Links } from "@/src/components/Links";
import { Headline } from "@/src/components/Headline";
import { useCallback, useState } from "react";

interface props {
  page: string;
}

const ITEMS = [
  { 
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app", 
    text: "Deploy now" 
  }, 
  { 
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app", 
    text: "Read our docs" 
  }
];

export const Main = (props: props)  => {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

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
        <Headline page={props.page} handleReduce={handleReduce}>
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">pages/{props.page}.js</code>
          <code>{items.length}</code>
        </Headline>
        <Links items={items} />
    </main>
  );
}
