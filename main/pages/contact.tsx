// Motion e Vars
import { motion } from "framer-motion";
import { GlobalVars } from "../components/motionVars";

// Head
import Head from "next/head";

// Tema e idioma
import { useContext } from "react";
import { ThemeContext } from "../components/HomePage/ThemeProvider/ThemeContext";

// Icones
import { AiFillMail } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";

// Componentes

import { SocialMedias } from "../components/ContactPage/SocialMedias";
import { ContactEmail } from "../components/ContactPage/ContactEmail";

export default function Contact() {
  // Idioma
  const { lang, theme } = useContext(ThemeContext);

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
        className="max-[699px]:w-96 w-screen background bg-cover w-screen h-fit flex flex-col justify-between items-center gap-10"
      >
        <ContactEmail />

        <SocialMedias />
      </motion.div>
    </>
  );
}
