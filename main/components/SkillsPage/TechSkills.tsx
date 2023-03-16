// Motion e variáveis
import { motion } from "framer-motion";
import { GlobalVars } from "../motionVars";

// Tema e Idioma
import { ThemeContext } from "../HomePage/ThemeProvider/ThemeContext";
import { useContext } from "react";

// Icones
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import {
  SiCypress,
  SiFramer,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export function TechSkills() {
  // Idioma e tema
  const { lang, theme } = useContext(ThemeContext);
  return (
    <>
      <div className="max-[1080px]:grid-cols-1 max-[1500px]:grid-cols-2 max-[699px]:w-96 w-4/6 h-full grid grid-cols-3 ml-36">
        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="elementoYEmTela"
          className="w-4/6 h-80 flex flex-col items-center justify-between p-2 bg-[#27272a] mb-10 rounded-md"
        >
          <a href="https://www.w3schools.com/html/" target="_blank">
            <AiFillHtml5
              className="text-5xl mt-3 bg-white rounded-full p-1 border-2 hover:scale-110 duration-150 ease-in-out"
              style={{
                color: theme.hexadecimal,
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
            />
          </a>
          <h3
            className="text-lg font-bold"
            style={{ color: theme.hexadecimal }}
          >
            HTML 5
          </h3>
          <p className="w-4/6 text-center leading-5 mb-3">
            {lang === "pt-BR"
              ? "Consigo desenvolver HTML semânticos e com fácil indexação no Google."
              : "I can develop semantic HTML with easy indexing on Google."}
          </p>

          <span className="bg-green-900 p-1 font-bold rounded-md hover:bg-green-700 hover:scale-110 transition ease mb-3">
            {lang === "pt-BR" ? "Utilizado nesse site" : "Used on this site"}
          </span>
        </motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY2"
          className="w-4/6 h-80 flex flex-col items-center justify-between p-2 bg-[#27272a] mb-10 rounded-md"
        >
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target="_blank"
          >
            <DiJavascript
              className="text-5xl mt-3 bg-white rounded-full p-1 border-2 hover:scale-110 duration-150 ease-in-out"
              style={{
                color: theme.hexadecimal,
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
            />
          </a>
          <h3
            className="text-lg font-bold"
            style={{ color: theme.hexadecimal }}
          >
            Javascript
          </h3>
          <p className="w-4/6 text-center leading-5 mb-3">
            {lang === "pt-BR"
              ? "Sei usar todos os conceitos da linguagem sem problemas, como laços e objetos além dos frameworks claro."
              : "I know how to use all language concepts without problems, such as loops and objects in addition to frameworks of course."}
          </p>

          <span className="bg-green-900 p-1 font-bold rounded-md hover:bg-green-700 hover:scale-110 transition ease mb-3">
            {lang === "pt-BR" ? "Utilizado nesse site" : "Used on this site"}
          </span>
        </motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY4"
          className="w-4/6 h-80 flex flex-col items-center justify-between p-2 bg-[#27272a] mb-10 rounded-md"
        >
          <a href="https://git-scm.com" target="_blank">
            <BsGit
              className="text-5xl mt-3 bg-white rounded-full p-1 border-2 hover:scale-110 duration-150 ease-in-out"
              style={{
                color: theme.hexadecimal,
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
            />
          </a>
          <h3
            className="text-lg font-bold"
            style={{ color: theme.hexadecimal }}
          >
            Git/Github
          </h3>
          <p className="w-4/6 text-center leading-5 mb-3">
            {lang === "pt-BR"
              ? "Para versionamento de código, utilizo Git e Github para fazer os pushs, pulls e salvar projetos."
              : "For code versioning, I use Git and Github to push, pull and save projects."}
          </p>

          <span className="bg-green-900 p-1 font-bold rounded-md hover:bg-green-700 hover:scale-110 transition ease mb-3">
            {lang === "pt-BR" ? "Utilizado nesse site" : "Used on this site"}
          </span>
        </motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY6"
          className="w-4/6 h-80 flex flex-col items-center justify-between p-2 bg-[#27272a] mb-10 rounded-md"
        >
          <a href="https://vitejs.dev" target="_blank">
            <SiVite
              className="text-5xl mt-3 bg-white rounded-full p-1 border-2 hover:scale-110 duration-150 ease-in-out"
              style={{
                color: theme.hexadecimal,
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
            />
          </a>
          <h3
            className="text-lg font-bold"
            style={{ color: theme.hexadecimal }}
          >
            Vite/NPM
          </h3>
          <p className="w-5/6 text-center leading-5 mb-3">
            {lang === "pt-BR"
              ? "Para construção de aplicações tenho utilizado Vite, mas também uso NPM frequentemente."
              : "For building applications I've been using Vite, but I also use NPM often."}
          </p>

          <span className="bg-red-900 p-1 font-bold rounded-md hover:bg-red-700 hover:scale-110 transition ease mb-5">
            {lang === "pt-BR"
              ? "Não utilizado nesse site"
              : "Not used on this site"}
          </span>
        </motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY8"
          className="w-4/6 h-80 flex flex-col items-center justify-between p-2 bg-[#27272a] mb-10 rounded-md"
        >
          <a href="https://pt-br.reactjs.org" target="_blank">
            <FaReact
              className="text-5xl mt-3 bg-white rounded-full p-1 border-2 hover:scale-110 duration-150 ease-in-out"
              style={{
                color: theme.hexadecimal,
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
            />
          </a>
          <h3
            className="text-lg font-bold"
            style={{ color: theme.hexadecimal }}
          >
            ReactJS
          </h3>
          <p className="w-5/6 text-center leading-5 mb-3">
            {lang === "pt-BR"
              ? "Em React sei usar hooks de estado, contexto, rotas, componentes e consumo de APIs."
              : "In React I know how to use state, context, routes, components and API consumption hooks."}
          </p>

          <span className="bg-green-900 p-1 font-bold rounded-md hover:bg-green-700 hover:scale-110 transition ease mb-3">
            {lang === "pt-BR" ? "Utilizado nesse site" : "Used on this site"}
          </span>
        </motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY10"
          className="w-4/6 h-80 flex flex-col items-center justify-between p-2 bg-[#27272a] mb-10 rounded-md"
        >
          <a href="https://tailwindui.com" target="_blank">
            <SiTailwindcss
              className="text-5xl mt-3 bg-white rounded-full p-1 border-2 hover:scale-110 duration-150 ease-in-out"
              style={{
                color: theme.hexadecimal,
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
            />
          </a>
          <h3
            className="text-lg font-bold"
            style={{ color: theme.hexadecimal }}
          >
            TailwindCSS
          </h3>
          <p className="w-5/6 text-center leading-5 mb-3">
            {lang === "pt-BR"
              ? "Além de TailwindCSS tenho conhecimento de Bootstrap, Styled-components, CSS Modules e SASS."
              : "I learned ReactJS right after mastering JS, I know how to use state hooks, context and the exclusive frameworks."}
          </p>

          <span className="bg-green-900 p-1 font-bold rounded-md hover:bg-green-700 hover:scale-110 transition ease mb-3">
            {lang === "pt-BR" ? "Utilizado nesse site" : "Used on this site"}
          </span>
        </motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY12"
          className="w-4/6 h-80 flex flex-col items-center justify-between p-2 bg-[#27272a] mb-10 rounded-md"
        >
          <a href="https://www.cypress.io" target="_blank">
            <SiCypress
              className="text-5xl mt-3 bg-white rounded-full p-1 border-2 hover:scale-110 duration-150 ease-in-out"
              style={{
                color: theme.hexadecimal,
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
            />
          </a>
          <h3
            className="text-lg font-bold"
            style={{ color: theme.hexadecimal }}
          >
            Cypress/JestJS
          </h3>
          <p className="w-5/6 text-center leading-5 mb-3">
            {lang === "pt-BR"
              ? "Para testes costumo utilizar Cypress para ReactJS e alguns outros projetos JestJS."
              : "For testing I usually use Cypress for ReactJS and some other JestJs projects."}
          </p>

          <span className="bg-red-900 p-1 font-bold rounded-md hover:bg-red-700 hover:scale-110 transition ease mb-5">
            {lang === "pt-BR"
              ? "Não utilizado nesse site"
              : "Not used on this site"}
          </span>
        </motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY14"
          className="w-4/6 h-80 flex flex-col items-center justify-between p-2 bg-[#27272a] mb-10 rounded-md"
        >
          <a href="https://www.typescriptlang.org" target="_blank">
            <SiTypescript
              className="text-5xl mt-3 bg-white rounded-full p-1 border-2 hover:scale-110 duration-150 ease-in-out"
              style={{
                color: theme.hexadecimal,
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
            />
          </a>
          <h3
            className="text-lg font-bold"
            style={{ color: theme.hexadecimal }}
          >
            Typescript
          </h3>
          <p className="w-5/6 text-center leading-5 mb-3">
            {lang === "pt-BR"
              ? "Para tipagem de linguagem uso Typescript, o mais famoso e conhecido do Javascript."
              : "For language typing I use Typescript, the most famous and well-known Javascript."}
          </p>

          <span className="bg-green-900 p-1 font-bold rounded-md hover:bg-green-700 hover:scale-110 transition ease mb-3">
            {lang === "pt-BR" ? "Utilizado nesse site" : "Used on this site"}
          </span>
        </motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY16"
          className="w-4/6 h-80 flex flex-col items-center justify-between p-2 bg-[#27272a] mb-10 rounded-md"
        >
          <a href="https://nextjs.org" target="_blank">
            <SiNextdotjs
              className="text-5xl mt-3 bg-white rounded-full p-1 border-2 hover:scale-110 duration-150 ease-in-out"
              style={{
                color: theme.hexadecimal,
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
            />
          </a>
          <h3
            className="text-lg font-bold"
            style={{ color: theme.hexadecimal }}
          >
            NextJS
          </h3>
          <p className="w-5/6 text-center leading-5 mb-3">
            {lang === "pt-BR"
              ? "Utilizo NextJS como Framework Server Side Rendering mas conheci um pouco de RemixJS também."
              : "I use NextJS as a Server Side Rendering Framework but I got to know a little about RemixJS as well."}
          </p>

          <span className="bg-green-900 p-1 font-bold rounded-md hover:bg-green-700 hover:scale-110 transition ease mb-3">
            {lang === "pt-BR" ? "Utilizado nesse site" : "Used on this site"}
          </span>
        </motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY18"
          className="w-4/6 h-80 flex flex-col items-center justify-between p-2 bg-[#27272a] mb-10 rounded-md"
        >
          <a href="https://www.framer.com" target="_blank">
            <SiFramer
              className="text-5xl mt-3 bg-white rounded-full p-1 border-2 hover:scale-110 duration-150 ease-in-out"
              style={{
                color: theme.hexadecimal,
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
            />
          </a>
          <h3
            className="text-lg font-bold"
            style={{ color: theme.hexadecimal }}
          >
            Framer Motion
          </h3>
          <p className="w-5/6 text-center leading-5 mb-3">
            {lang === "pt-BR"
              ? "Utilizei o Motion do Framer para fazer todas as animações presentes nesse site e em alguns outros."
              : "I used Motion from Framer to make all the animations present on this site and on some others."}
          </p>

          <span className="bg-green-900 p-1 font-bold rounded-md hover:bg-green-700 hover:scale-110 transition ease mb-3">
            {lang === "pt-BR" ? "Utilizado nesse site" : "Used on this site"}
          </span>
        </motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY20"
          className="w-4/6 h-80 flex flex-col items-center justify-between p-2 bg-[#27272a] mb-10 rounded-md"
        >
          <a href="https://www.python.org" target="_blank">
            <SiPython
              className="text-5xl mt-3 bg-white rounded-full p-1 border-2 hover:scale-110 duration-150 ease-in-out"
              style={{
                color: theme.hexadecimal,
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
            />
          </a>
          <h3
            className="text-lg font-bold"
            style={{ color: theme.hexadecimal }}
          >
            Python
          </h3>
          <p className="w-5/6 text-center leading-5 mb-3">
            {lang === "pt-BR"
              ? "Primeira linguagem que aprendi, sei o básico da linguagem mas nunca cheguei a estudar Django ou outros frameworks."
              : "First language I learned, I know the basics of the language but I never got to study Django or other frameworks."}
          </p>

          <span className="bg-red-900 p-1 font-bold rounded-md hover:bg-red-700 hover:scale-110 transition ease mb-5">
            {lang === "pt-BR"
              ? "Não utilizado nesse site"
              : "Not used on this site"}
          </span>
        </motion.div>
      </div>
    </>
  );
}
