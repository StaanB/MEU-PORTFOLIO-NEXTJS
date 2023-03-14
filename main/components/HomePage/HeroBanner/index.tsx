// Motion e motion vars
import { motion } from "framer-motion";
import { GlobalVars } from "../../motionVars";

// Next Link
import Link from "next/link";

// Icons
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

export function HeroBanner() {
  // H1 clicado ou não
  const [h1Hover, setH1Hover] = useState(false);
  // Tema
  const { theme, lang } = useContext(ThemeContext);

  return (
    <>
      <motion.div className="max-[699px]:w-96 max-[699px]:ml-5 max-[699px]:w-96 background bg-cover w-screen h-fit flex justify-center items-center ">
        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="elementoYEmTela"
          exit="elementoSaindo"
          className="w-30 h-auto bg-zinc-800 flex flex-col justify-center items-center mt-40 mb-20 m-auto rounded-md"
        >
          <motion.div
            variants={GlobalVars}
            initial="elementoYFora"
            animate="elementoYEmTela"
            whileHover="elementoHover2"
            className="bg-eu bg-cover w-96 h-96 rounded-full relative bottom-10 border-solid border-8 "
            style={{
              borderColor: theme?.hexadecimal,
              boxShadow: theme?.shadow,
            }}
          ></motion.div>

          <motion.h1
           variants={GlobalVars}
           initial="elementoYFora"
           animate="delayY2"
            whileHover="textoHover"
            onMouseEnter={() => setH1Hover(true)}
            onMouseLeave={() => setH1Hover(false)}
            style={{ color: h1Hover ? theme?.hexadecimal : "white" }}
            className="text-4xl font-bold tracking-wideler cursor-pointer"
          >
            Stanley Brenner
          </motion.h1>

          <motion.p
            variants={GlobalVars}
            initial="elementoYFora"
            animate="delayY4"
            className="text-sm mb-10"
          >
            {lang === "pt-BR"
              ? "Desenvolvedor Front-End e Designer"
              : "Front-end Developer & Designer"}
          </motion.p>

          <motion.ul
            variants={GlobalVars}
            initial="elementoYFora"
            animate="delayY6"
            className="flex gap-7 mb-10"
          >
            <Link href="https://github.com/StaanB" target="_blank">
              <BsGithub className="w-6 h-6 hover:text-black hover:scale-125 ease-in duration-200 cursor-pointer" />
            </Link>

            <Link href="https://www.instagram.com/staanb/" target="_blank">
              <BsInstagram className="w-6 h-6 hover:text-pink-600 hover:scale-125 ease-in duration-200 cursor-pointer" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/stanley-brenner-213989184/"
              target="_blank"
            >
              <BsLinkedin className="w-6 h-6 hover:text-blue-600 hover:scale-125 ease-in duration-200 cursor-pointer" />
            </Link>

            <Link href="https://wa.me/+5571986895914" target="_blank">
              <BsWhatsapp className="w-6 h-6 hover:text-green-600 hover:scale-125 ease-in duration-200 cursor-pointer" />
            </Link>
          </motion.ul>
        </motion.div>
      </motion.div>
    </>
  );
}
