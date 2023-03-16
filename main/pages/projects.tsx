// Motion e Vars
import { motion } from "framer-motion";
import { GlobalVars } from "../components/motionVars";

// Tema e Idioma
import { useContext } from "react";
import { ThemeContext } from "../components/HomePage/ThemeProvider/ThemeContext";

// Icones
import { BsBriefcaseFill } from "react-icons/bs";

// Componentes
import { GithubRepos } from "../components/ProjectsPage/GithubRepos";
import Head from "next/head";

export default function Projects() {
  // Idioma e tema
  const { lang, theme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>
          {lang === "pt-BR" ? "Stanley | Projetos" : "Stanley | Projects"}
        </title>
      </Head>
      
      <div className="max-[699px]:w-96 w-screen background bg-cover w-screen h-fit flex flex-col justify-between items-center gap-10">
        <motion.div
          variants={GlobalVars}
          exit="elementoSaindo"
          className="max-[1080px]:ml-12 flex flex-col items-center"
        >
          <BsBriefcaseFill
            className="w-8 h-8 mt-10 mb-3"
            style={{ color: theme?.hexadecimal }}
          />
          <motion.h2
            variants={GlobalVars}
            whileInView="elementInView"
            className="max-[1080px]:text-center mb-8 text-4xl font-bold underline"
            style={{ textDecorationColor: theme?.hexadecimal }}
          >
            {lang === "pt-BR" ? "Meus projetos" : "My projects"}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={GlobalVars}
          exit="elementoSaindo"
          className="max-[1080px]:flex-col w-5/6 mb-20 flex justify-left bg-[#111111] p-2 rounded-md"
        >
          <div className="max-[1080px]:w-full ml-2 w-2/6">
            <motion.div
              variants={GlobalVars}
              initial="elementoYFora"
              animate="elementoYEmTela"
              className="max-[699px]:w-60 max-[699px]:h-60 max-[699px]:mb-16 bg-euProjects bg-cover bg-no-repeat w-72 h-72 rounded-full border-solid border-2 border-gray-800"
            >
              <span className="max-[699px]:top-40 max-[699px]:left-52 relative left-56 top-60 bg-[#111111] p-2 rounded-full border-solid border-2 border-gray-800">
                ☕
              </span>
            </motion.div>

            <motion.div
              variants={GlobalVars}
              initial="elementoYFora"
              animate="delayY2"
              className="ml-5 flex flex-col mb-3 mt-3"
            >
              <h3 className="text-2xl font-bold">Stanley B</h3>
              <span className="text-gray-400 font-light">StaanB</span>
            </motion.div>
            <motion.p
              variants={GlobalVars}
              initial="elementoYFora"
              animate="delayY4"
              className="w-5/6 ml-5 leading-6 text-left"
            >
              {lang === "pt-BR"
                ? "Para ver meus projetos você poderia acessar meu GitHub, mas porque esse trabalho? Então eu trouxe o Github para cá. Pode clicar em algum repositório e vai direto para o repositório escolhido."
                : "To see my projects you could access my GitHub, but why this work? So I brought Github here. You can click on any repository and go straight to the chosen repository."}
            </motion.p>
          </div>

          <GithubRepos />
        </motion.div>
      </div>
    </>
  );
}
