// Motion
import { motion } from "framer-motion";

// Icones
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ProgressBar } from "./ProgressBar";

// Tema e idioma
import { ThemeContext } from "../ThemeProvider/ThemeContext";
import { useContext } from "react";

export function SkillsSection() {
  // Tema e idioma
  const { theme, lang } = useContext(ThemeContext);

  return (
    <>
      <div className="max-[699px]:hidden w-screen h-auto flex flex-col justify-center items-center bg-zinc-800">
        <motion.div className="w-full flex flex-col justify-center items-center mb-20">
          <BsFillPersonLinesFill
            className="w-8 h-8 mt-10 mb-3"
            style={{ color: theme?.hexadecimal }}
          />
          <motion.h2
            whileInView={{ scale: [1, 1.1, 1, 1.1, 1] }}
            transition={{ duration: 5 }}
            className="mb-20 text-4xl font-bold underline"
            style={{ textDecorationColor: theme?.hexadecimal }}
          >
            {lang === "pt-BR" ? "Habilidades" : "Skills"}
          </motion.h2>

          <div className="max-[1080px]:flex-col w-4/6 h-auto flex items-center justify-evenly gap-96">
            <div className="w-full flex flex-col gap-5">
              <p className="text-3xl font-bold">
                {lang === "pt-BR" ? "Habilidades Técnicas" : "Techincal Skills"}
              </p>

              <ProgressBar title="Javascript" percent={85} />

              <ProgressBar title="HTML e CSS" percent={100} />

              <ProgressBar title="React" percent={80} />

              <ProgressBar
                title={`${lang === "pt-BR" ? "Inglês" : "English"}`}
                percent={80}
              />

              <ProgressBar title="Photoshop" percent={60} />
            </div>

            <div className="w-full flex flex-col gap-5">
              <p className="text-3xl font-bold">
                {lang === "pt-BR"
                  ? "Habilidades Profissionais"
                  : "Professional Skills"}
              </p>

              <ProgressBar
                title={`${lang === "pt-BR" ? "Comunicação" : "Comunication"}`}
                percent={90}
              />

              <ProgressBar
                title={`${
                  lang === "pt-BR" ? "Trabalho em equipe" : "Teamwork"
                }`}
                percent={90}
              />

              <ProgressBar
                title={`${lang === "pt-BR" ? "Confiabilidade" : "Reliability"}`}
                percent={80}
              />

              <ProgressBar
                title={`${lang === "pt-BR" ? "Criatividade" : "Creativity"}`}
                percent={70}
              />

              <ProgressBar
                title={`${lang === "pt-BR" ? "Flexibilidade" : "Flexibility"}`}
                percent={60}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
