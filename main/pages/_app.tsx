// CSS Global
import "../styles/globals.css";
// Next Config
import type { AppProps } from "next/app";
// Nav presente nas páginas
import { NavBar } from "../components/HomePage/NavBar/Navbar";
// Animações de saida
import { AnimatePresence } from "framer-motion";


export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <NavBar />
      <Component {...pageProps} key={router.pathname} />
    </AnimatePresence>
  );
}
