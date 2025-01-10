import Link from "next/link"

const NAVI_ITEMS = [
  {href: "/", label: "Index"},
  {href: "/about", label: "About"}
]

export const Header = () => {
  return (
    <div>
      {NAVI_ITEMS.map((item: { href: string; label: string }) => {
        return (
          <Link key={item.href} href={item.href} className="link-class">
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
