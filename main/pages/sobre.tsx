import Head from "next/head";

// Tema e idioma
import { useContext } from "react";
import { ThemeContext } from "../components/HomePage/ThemeProvider/ThemeContext";

export default function Sobre() {
  // Idioma
  const { lang } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>
          {lang === "pt-BR" ? "Stanley | Sobre" : "Stanley | About"}
        </title>
      </Head>

      <h1 className="text-xl font-bold underline">Hello Sobre</h1>
    </>
  );
}
