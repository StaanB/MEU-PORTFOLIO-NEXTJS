// Head
import Head from "next/head";

// Tema e idioma
import { useContext } from "react";
import { ThemeContext } from "../components/HomePage/ThemeProvider/ThemeContext";

// Componentes
import { MeDetails } from "../components/AboutPage/MeDetails";

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
    
    <MeDetails/>
      
    </>
  );
}
