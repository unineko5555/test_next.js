import Image from "next/image";

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

export function Links() {
  return (
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {ITEMS.map(item => {
            return (
                <a
                key={item.text}
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                >
                <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
                />
                {item.text}
                </a>
            )          
          })}
        </div>
    );
}
