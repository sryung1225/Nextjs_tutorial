import NavBar from "@/components/NavBar";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>Custom App 테스트</span>
    </>
  );
}
