// Motion e Vars
import { motion } from "framer-motion";
import { GlobalVars } from "../components/motionVars";

// Head
import Head from "next/head";
import Image from "next/image";

// Tema e idioma
import { useContext } from "react";
import { ThemeContext } from "../components/HomePage/ThemeProvider/ThemeContext";

// Imagens
import background from "../assets/background-main-page.jpg";

// Componentes

import { SocialMedias } from "../components/ContactPage/SocialMedias";
import { ContactEmail } from "../components/ContactPage/ContactEmail";

export default function Contact() {
  // Idioma
  const { lang } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>
          {lang === "pt-BR" ? "Stanley | Contato" : "Stanley | Contact"}
        </title>
      </Head>

      <motion.div
        variants={GlobalVars}
        exit="elementoSaindo"
        className="max-[699px]:w-96 w-screen bg-cover w-screen h-fit flex flex-col justify-between items-center gap-10"
      >
        <ContactEmail />

        <SocialMedias />

        <Image
          className="w-screen top-16 max-[1040px]:h-[120rem] h-[60rem] absolute right-1 opacity-40 z-0"
          src={background}
          placeholder="blur"
          alt="imagem de fundo"
          style={{
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </motion.div>
    </>
  );
}
