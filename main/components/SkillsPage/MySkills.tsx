// Motion e variáveis
import { motion } from "framer-motion";
import { GlobalVars } from "../motionVars";

// Tema e Idioma
import { ThemeContext } from "../HomePage/ThemeProvider/ThemeContext";
import { useContext } from "react";

// Icones
import { BsFillPersonLinesFill } from "react-icons/bs";

import { TechSkills } from "./TechSkills";

export function MySkills() {
  // Idioma e tema
  const { lang, theme } = useContext(ThemeContext);
  return (
    <>
      <motion.div
        variants={GlobalVars}
        exit="elementoSaindo"
        className="w-screen background bg-cover w-screen h-fit flex flex-col justify-between items-center gap-10"
      >
        <div className="max-[699px]:ml-12 flex flex-col items-center">
          <BsFillPersonLinesFill
            className="w-8 h-8 mt-10 mb-3"
            style={{ color: theme?.hexadecimal }}
          />
          <motion.h2
            variants={GlobalVars}
            whileInView="elementInView"
            className="max-[699px]:text-center mb-8 text-4xl font-bold underline"
            style={{ textDecorationColor: theme?.hexadecimal }}
          >
            {lang === "pt-BR" ? "Habilidades técnicas" : "Technical abilities"}
          </motion.h2>
        </div>

        <TechSkills />

        <div className="flex flex-col items-center hidden">
          <BsFillPersonLinesFill
            className="w-8 h-8 mt-10 mb-3"
            style={{ color: theme?.hexadecimal }}
          />
          <motion.h2
            whileInView={{ scale: [1, 1.1, 1, 1.1, 1] }}
            transition={{ duration: 5 }}
            className="mb-8 text-4xl font-bold underline"
            style={{ textDecorationColor: theme?.hexadecimal }}
          >
            {lang === "pt-BR"
              ? "Experiências profissionais"
              : "Professional Experiences"}
          </motion.h2>
        </div>
      </motion.div>
    </>
  );
}
