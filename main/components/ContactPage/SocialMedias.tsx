// Motion
import { motion } from "framer-motion";
import { GlobalVars } from "../motionVars";
// Link
import Link from "next/link";

// Icones
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

// tema
import { ThemeContext } from "../HomePage/ThemeProvider/ThemeContext";
import { useContext } from "react";

export function SocialMedias() {
  // Idioma e tema
  const { lang, theme } = useContext(ThemeContext);
  return (
    <div className="w-5/6 mb-10 flex flex-col items-center justify-center z-10">
      <motion.h2
        variants={GlobalVars}
        initial="elementoYFora"
        animate="delayY4"
        className="max-[699px]:text-center mb-10 text-3xl font-bold underline"
        style={{ textDecorationColor: theme?.hexadecimal }}
      >
        {lang === "pt-BR" ? "Minhas redes sociais" : "My social medias"}
      </motion.h2>

      <motion.div
        variants={GlobalVars}
        initial="elementoYFora"
        animate="delayY6"
        className="max-[1040px]:flex-col max-[1040px]:gap-16 w-4/6 flex justify-between"
      >
        <Link
          className="flex flex-col items-center gap-5 hover:text-black hover:scale-125 ease-in duration-200"
          href="https://github.com/StaanB"
          target="_blank"
        >
          <BsGithub className="w-24 h-24 cursor-pointer" />
          <p className="text-lg font-bold">Github</p>
        </Link>

        <Link
          className="flex flex-col items-center gap-5 hover:text-pink-700 hover:scale-125 ease-in duration-200"
          href="https://www.instagram.com/staanb/"
          target="_blank"
        >
          <BsInstagram className="w-24 h-24 cursor-pointer" />
          <p className="text-lg font-bold">Instagram</p>
        </Link>

        <Link
          className="flex flex-col items-center gap-5 hover:text-blue-600 hover:scale-125 ease-in duration-200"
          href="https://www.linkedin.com/in/stanley-brenner-213989184/"
          target="_blank"
        >
          <BsLinkedin className="w-24 h-24 cursor-pointer" />
          <p className="text-lg font-bold">Linkedin</p>
        </Link>

        <Link
          className="flex flex-col items-center gap-5 hover:text-green-600 hover:scale-125 ease-in duration-200"
          href="https://wa.me/+5571986895914"
          target="_blank"
        >
          <BsWhatsapp className="w-24 h-24 cursor-pointer" />
          <p className="text-lg font-bold">Whatsapp</p>
        </Link>
      </motion.div>
    </div>
  );
}
