// Motion e Vars
import { motion } from "framer-motion";
import { GlobalVars } from "../motionVars";

// Hooks react
import { useContext, useState } from "react";

// Tema e idioma
import { ThemeContext } from "../HomePage/ThemeProvider/ThemeContext";

// Verificar inputs
import { verifyInputs } from "./FirebaseSend";

// Icones
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";

export function ContactEmail() {
  const [buttonHover, setButtonHover] = useState(false);
  // Idioma e tema
  const { lang, theme } = useContext(ThemeContext);
  return (
    <>
      <motion.div
        variants={GlobalVars}
        initial="elementoYFora"
        animate="elementoYEmTela"
        className="flex flex-col items-center z-10"
      >
        <AiFillMail
          className="w-8 h-8 mt-10 mb-3"
          style={{ color: theme?.hexadecimal }}
        />
        <motion.h2
          variants={GlobalVars}
          whileInView="elementInView"
          className="max-[699px]:text-center mb-8 text-4xl font-bold underline"
          style={{ textDecorationColor: theme?.hexadecimal }}
        >
          {lang === "pt-BR" ? "Fale comigo" : "Contact Me"}
        </motion.h2>

        <motion.p className="w-4/6 text-lg text-center">
          {lang === "pt-BR"
            ? "Precisa falar algo mais elaborado? Me mande um email e responderei assim que possível."
            : "Need to say something more elaborate? Send me an email and I will respond as soon as possible."}
        </motion.p>
      </motion.div>

      <div className="max-[699px]:flex-col w-5/6 mb-10 flex items-center justify-around z-10">
        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY2"
        >
          <HiOutlineMailOpen
            className="text-[20rem]"
            style={{ color: theme.hexadecimal }}
          />
        </motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY2"
          className="w-80 h-auto flex flex-col items-center justify-between p-2 bg-[#27272a] mb-10 rounded-md"
        >
          <div className="flex flex-col items-center">
            <input
              className="w-72 text-center mt-5 h-10 rounded-lg shadow-lg focus:border-0 focus:shadow-none after:border-none placeholder:italic placeholder:text-gray-800"
              autoComplete="off"
              style={{
                outlineColor: theme.hexadecimal,
                color: theme.hexadecimal,
              }}
              type="text"
              name="Nome"
              placeholder={lang === "pt-BR" ? "Seu nome" : "Your name"}
              id="name"
            />
            <span
              id="span-nome"
              className="w-5/6 text-sm text-center text-red-600 font-bold hidden"
            >
              {lang === "pt-BR"
                ? "O campo nome não pode estar vazio."
                : "The name field cannot be empty."}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <input
              className="w-72 text-center mt-5 h-10 rounded-lg shadow-lg focus:border-0 focus:shadow-none after:border-none placeholder:italic placeholder:text-gray-800"
              autoComplete="off"
              style={{
                outlineColor: theme.hexadecimal,
                color: theme.hexadecimal,
              }}
              type="email"
              name="email"
              placeholder={lang === "pt-BR" ? "Seu email" : "Your mail"}
              id="email"
            />
            <span
              id="span-email"
              className="w-5/6 text-sm text-center text-red-600 font-bold hidden"
            >
              {lang === "pt-BR"
                ? "O campo email não pode estar vazio."
                : "The email field cannot be empty."}
            </span>
            <span
              id="span-email2"
              className="w-5/6 text-sm text-center text-red-600 font-bold hidden"
            >
              {lang === "pt-BR"
                ? "Formato de email inválido."
                : "Invalid email format."}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <textarea
              className="w-72 text-center mt-5 h-20 rounded-lg shadow-lg focus:border-0 focus:shadow-none after:border-none placeholder:italic placeholder:text-gray-800"
              autoComplete="off"
              style={{
                outlineColor: theme.hexadecimal,
                color: theme.hexadecimal,
                resize: "none",
              }}
              name="Mensagem"
              placeholder={lang === "pt-BR" ? "Sua mensagem" : "Your message"}
              id="message"
            />
            <span
              id="span-message"
              className="w-5/6 text-sm text-center text-red-600 font-bold hidden"
            >
              {lang === "pt-BR"
                ? "O campo mensagem não pode estar vazio."
                : "The message field cannot be empty."}
            </span>

            <span
              id="span-message2"
              className="w-5/6 text-sm text-center text-red-600 font-bold hidden"
            >
              {lang === "pt-BR"
                ? "A mensagem deve conter mais de 15 caracteres."
                : "The message must contain more than 15 characters."}
            </span>
          </div>

          <button
            onClick={verifyInputs}
            className="w-4/6 mt-5 h-10 items-center self-center border px-4 py-2 gap-2 cursor-pointer rounded-md transition-all duration-500 ease-in-out hover:scale-110"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            style={{
              backgroundColor: buttonHover
                ? theme?.hexadecimal
                : "var(--cinza-100)",
              borderColor: buttonHover ? theme?.hexadecimal : "white",
            }}
          >
            {lang === "pt-BR" ? "Enviar" : "Send"}
          </button>
        </motion.div>
      </div>
    </>
  );
}
