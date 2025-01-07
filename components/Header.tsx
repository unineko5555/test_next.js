import Link from "next/link"

export function Header() {
  return (
    <div>
      <Link href="/" className="link-class">
        Index
      </Link>
      <Link href="/about" className="link-class">
        About
      </Link>
    </div>
  );
}
