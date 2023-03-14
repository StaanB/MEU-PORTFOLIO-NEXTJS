// Head
import Head from "next/head";

// Tema e idioma
import { useContext } from "react";
import { ThemeContext } from "../components/HomePage/ThemeProvider/ThemeContext";

// Componentes
import { MySkills } from "../components/SkillsPage/MySkills";

export default function Skills() {
  // Idioma
  const { lang } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>
          {lang === "pt-BR" ? "Stanley | Habilidades" : "Stanley | Skills"}
        </title>
      </Head>

      <MySkills/>

      
    </>
  );
}