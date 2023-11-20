import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="bg-[tomato]">
      <Link
        href="/"
        className={`no-underline ${
          router.pathname === "/" ? "text-[yellow]" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`no-underline ${
          router.pathname === "/about" ? "text-[yellow]" : ""
        }`}
      >
        About
      </Link>
    </nav>
  );
}
