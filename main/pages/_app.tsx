// CSS Global
import "../styles/globals.css";
// Next Config
import type { AppProps } from "next/app";
// Nav presente nas páginas
import { NavBar } from "../components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
