import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="flex flex-col items-center gap-2.5 pt-2.5 pb-5 shadow-lg">
      <Image
        src="/vercel.svg"
        width={100}
        height={20}
        alt="logo"
        className="mb-2.5"
      />
      <div className="flex gap-2.5">
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
      </div>
    </nav>
  );
}
