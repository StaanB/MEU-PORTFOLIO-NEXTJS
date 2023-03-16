// Head
import Head from "next/head";

// Tema e idioma
import { useContext } from "react";
import { ThemeContext } from "../components/HomePage/ThemeProvider/ThemeContext";

// Componentes
import { MySkills } from "../components/SkillsPage/MySkills";
import background from "../assets/background-main-page.jpg"

import Image from "next/image";

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

      <MySkills />

      <Image
        className="w-screen max-[1040px]:h-[260rem] top-16 h-[100rem] absolute right-1 opacity-40 z-0"
        src={background}
        placeholder="blur"
        alt="imagem de fundo"
        style={{
          objectFit: "cover", backgroundRepeat: "no-repeat"
        }}
      />
    </>
  );
}
