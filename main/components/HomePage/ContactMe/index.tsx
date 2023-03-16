// Import Motion
import { motion } from "framer-motion";
import { GlobalVars } from "../../motionVars";

// Import next Link
import Link from "next/link";

// Import Icones
import {
  BsEmojiLaughing,
  BsPhoneFill,
  BsTelephoneFill,
  BsWhatsapp,
} from "react-icons/bs";
import { AiFillMail, AiFillRightCircle } from "react-icons/ai";

// Import mensagem para whatsapp
import { sendWhatsMessage } from "./sendWhatsMessage";

// Tema e idioma
import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

export function ContactMe() {
  // Tema e idioma
  const { theme, lang } = useContext(ThemeContext);
  const [emailHover, setEmailHover] = useState(false);

  return (
    <>
      <div className="max-[699px]:w-96 max-[699px]:ml-4 w-full h-auto flex flex-col justify-center items-center bg-zinc-800">
        <BsPhoneFill
          className="w-8 h-8 mt-10 mb-3"
          style={{ color: theme?.hexadecimal }}
        />
        <motion.h2
          variants={GlobalVars}
          whileInView="elementInView"
          className="mb-20 text-4xl font-bold underline"
          style={{ textDecorationColor: theme?.hexadecimal }}
        >
          {lang === "pt-BR" ? "Contato" : "Contact"}
        </motion.h2>

        <div className="max-[1080px]:flex-col max-[1080px]:gap-10 max-[1080px]:ml-24 w-5/6 mr-24 flex justify-center items-center mb-10">
          <div className="w-fit flex flex-col items-center gap-5">
            <BsTelephoneFill
              className="text-4xl"
              style={{ color: theme?.hexadecimal }}
            />
            <h2 className="text-2xl font-bold">
              {lang === "pt-BR" ? "Por telefone" : "By phone"}
            </h2>
            <div className="flex flex-col gap-10 items-center">
              <span className="w-4/6 text-center opacity-50">
                {lang === "pt-BR"
                  ? "(Disponível de segunda a sexta das 8h ás 20h)"
                  : "(Available from Monday to Friday from 8 AM to 8 PM)"}
              </span>
              <Link
                className="font-bold text-xl"
                style={{ color: theme?.hexadecimal }}
                href="tel:5571986895914"
              >
                {lang === "pt-BR" ? "+55 (71) 9 8689-5914" : "+55 71986895914"}
              </Link>
            </div>
          </div>

          <div className="w-fit flex flex-col items-center gap-5">
            <AiFillMail
              className="text-4xl"
              style={{ color: theme?.hexadecimal }}
            />
            <h2 className="text-2xl font-bold">
              {lang === "pt-BR" ? "Me mande um email" : "Send me a mail"}
            </h2>
            <p className="w-4/6 text-center opacity-50">
              {lang === "pt-BR"
                ? "Caso precise de um texto mais elaborado pode me enviar um email privado."
                : "If you need a more elaborate text, you can send me a private email."}
            </p>
            <Link
              className="border px-4 py-2 flex gap-2 cursor-pointer rounded-md transition-all duration-500 ease-in-out hover:scale-110"
              onMouseEnter={() => setEmailHover(true)}
              onMouseLeave={() => setEmailHover(false)}
              style={{
                backgroundColor: emailHover
                  ? theme?.hexadecimal
                  : "var(--cinza-100)",
                borderColor: emailHover ? theme?.hexadecimal : "white",
              }}
              href="/contact"
            >
              {lang === "pt-BR" ? "Fale comigo" : "Contact me"}
            </Link>
          </div>

          <div className="w-fit flex flex-col items-center gap-5">
            <BsWhatsapp
              className="text-4xl"
              style={{ color: theme?.hexadecimal }}
            />
            <p className="w-4/6 text-center opacity-50">
              {lang === "pt-BR"
                ? "Me mande uma mensagem no whatsapp."
                : "Send me a whatsapp message."}
            </p>
            <div className="w-full h-10 flex justify-evenly items-center rounded-full bg-gray-900 p-2">
              <BsEmojiLaughing className="mr-2" />
              <input
                id="message"
                type="text"
                autoComplete="off"
                className="bg-gray-900 focus:border-none focus:outline-0"
                placeholder={lang === "pt-BR" ? "Mensagem" : "Message"}
              />
              <button onClick={sendWhatsMessage}>
                <AiFillRightCircle className="text-3xl text-green-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
