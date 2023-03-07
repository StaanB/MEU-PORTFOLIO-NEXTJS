// Import Motion
import { motion } from "framer-motion";

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

export function ContactMe() {
  return (
    <>
      <div className="w-screen h-auto flex flex-col justify-center items-center bg-zinc-800">
        <BsPhoneFill className="w-8 h-8 mt-10 mb-3 text-orange-600" />
        <motion.h2
          whileInView={{ scale: [1, 1.1, 1, 1.1, 1] }}
          transition={{ duration: 5 }}
          className="mb-20 text-4xl font-bold underline decoration-orange-600"
        >
          Contato
        </motion.h2>

        <div className="w-5/6 mr-10 flex justify-between items-center mb-10">
          <div className="flex flex-col items-center gap-5">
            <BsTelephoneFill className="text-4xl text-orange-600" />
            <h2 className="text-2xl font-bold">Por telefone</h2>
            <div className="flex flex-col gap-10 items-center">
              <span className="w-4/6 text-center opacity-50">
                (Disponível de segunda a sexta das 8:00 ás 20:00).
              </span>
              <Link
                className="font-bold text-xl text-orange-600"
                href="tel:5571986895914"
              >
                +55 (71) 98689-5914
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <AiFillMail className="text-4xl text-orange-600" />
            <h2 className="text-2xl font-bold">Me mande um email</h2>
            <p className="w-4/6 text-center opacity-50">
              Caso precise enviar um email mais detalhado pode me enviar um
              email privado.
            </p>
            <Link
              className="border px-4 py-2 flex gap-2 cursor-pointer rounded-md transition-all duration-500 ease-in-out hover:bg-orange-600 hover:border-orange-600 hover:scale-110"
              href="/contato"
            >
              Fale comigo
            </Link>
          </div>

          <div className="flex flex-col items-center gap-5">
            <BsWhatsapp className="text-4xl text-orange-600" />
            <p className="w-4/6 text-center opacity-50">
              Me mande uma mensagem no whatsapp
            </p>
            <div className="w-full h-10 flex justify-evenly items-center rounded-full bg-gray-900">
              <BsEmojiLaughing />
              <input
                id="message"
                type="text"
                className="bg-gray-900 focus:border-none focus:outline-0"
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
