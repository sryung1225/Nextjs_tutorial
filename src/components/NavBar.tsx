import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link
        style={{ color: router.pathname === "/" ? "blue" : "red" }}
        href="/"
      >
        Home
      </Link>
      <Link
        style={{ color: router.pathname === "/about" ? "blue" : "red" }}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
