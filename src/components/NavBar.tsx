import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="flex justify-center items-center gap-2.5 py-5 nav-box-shadow">
      <Link
        href="/"
        className={`font-medium text-lg ${
          router.pathname === "/" ? "text-[tomato]" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`font-medium text-lg ${
          router.pathname === "/about" ? "text-[tomato]" : ""
        }`}
      >
        About
      </Link>
    </nav>
  );
}
