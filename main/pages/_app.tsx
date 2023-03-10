// CSS Global
import "../styles/globals.css";
// Next Config
import type { AppProps } from "next/app";
// Animações de saida
import { AnimatePresence } from "framer-motion";
// Tema
import { ThemeProvider } from "../components/HomePage/ThemeProvider/ThemeContext";

// Elemntos presentes nas páginas
import { NavBar } from "../components/HomePage/NavBar/Navbar";
import { ColorsContainer } from "../components/HomePage/ThemeProvider/ColorsContainer";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <AnimatePresence>
        <NavBar />
        <Component {...pageProps} key={router.pathname} />
        <ColorsContainer />
      </AnimatePresence>
    </ThemeProvider>
  );
}
