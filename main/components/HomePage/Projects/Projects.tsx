// Import motion
import { motion } from "framer-motion";

// Import next link e imagens
import Image from "next/image";
import Link from "next/link";

// Import de Icones
import { BsBriefcaseFill, BsGithub } from "react-icons/bs";

// Import de fotos
import legiao from "../../../assets/legiao.png";
import stMoney from "../../../assets/st-money.png";
import Cadastros from "../../../assets/cadastro.png";

// Tema
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

export function Habilities() {
  // Tema e idioma
  const { theme, lang } = useContext(ThemeContext);

  return (
    <>
      <motion.div className="max-[699px]:w-96 max-[699px]:ml-5 w-screen h-auto flex flex-col justify-center items-center">
        <div className="w-full flex flex-col  justify-center items-center mb-20">
          <BsBriefcaseFill
            className="w-8 h-8 mt-10"
            style={{ color: theme?.hexadecimal }}
          />
          <motion.h2
            whileInView={{ scale: [1, 1.1, 1, 1.1, 1] }}
            transition={{ duration: 5 }}
            className="mb-20 text-4xl font-bold underline"
            style={{ textDecorationColor: theme?.hexadecimal }}
          >
            {lang === "pt-BR" ? "Projetos" : "Projects"}
          </motion.h2>
          <div className="w-4/6 flex max-[1080px]:flex-col max-[1080px]:gap-7 items-center justify-between gap-8">
            <div className="w-15 h-auto p-3 gap-5 rounded-md bg-zinc-800 flex flex-col items-center justify-between hover:scale-110 transition-all ease-in-out">
              <Image
                src={stMoney}
                width={300}
                height={300}
                placeholder="blur"
                alt="foto do st-money"
                style={{ objectFit: "cover" }}
              />
              <p className="font-bold text-md mb-2 w-5/6 text-center">
                {lang === "pt-BR"
                  ? "Site para controle de despesas."
                  : "Expense tracking website."}
              </p>
              <Link
                className="uppercase font-bold bg-[#111111] p-3 rounded-full flex items-center gap-2 hover:bg-black transition-all ease-in-out"
                href={"https://github.com/StaanB/st-money"}
                target="_blank"
              >
                {lang === "pt-BR" ? "Ver no Github" : "View in Github"}
                <BsGithub className="text-lg" />
              </Link>
            </div>

            <div className="w-15 h-auto p-3 gap-3 rounded-md bg-zinc-800 flex flex-col items-center justify-evenly hover:scale-110 transition-all ease-in-out">
              <Image
                src={legiao}
                width={300}
                height={300}
                placeholder="blur"
                alt="foto do legião"
                style={{ objectFit: "cover" }}
              />
              <p className="font-bold text-md mb-2 w-5/6 text-center">
                {lang === "pt-BR"
                  ? "Site do motogrupo Legião Sem Fronteiras."
                  : "Legion motorcycle group website."}
              </p>
              <Link
                className="uppercase font-bold bg-[#111111] p-3 rounded-full flex items-center gap-2 hover:bg-black transition-all ease-in-out"
                href={"https://github.com/StaanB/legiao-sem-fronteiras"}
                target="_blank"
              >
                {lang === "pt-BR" ? "Ver no Github" : "View in Github"}
                <BsGithub className="text-lg" />
              </Link>
            </div>

            <div className="w-15 h-auto p-3 gap-3 rounded-md bg-zinc-800 flex flex-col items-center justify-evenly hover:scale-110 transition-all ease-in-out">
              <Image
                src={Cadastros}
                width={300}
                height={300}
                placeholder="blur"
                alt="foto da página de cadastros"
                style={{ objectFit: "cover" }}
              />
              <p className="font-bold text-md mb-2 w-5/6 text-center">
                {lang === "pt-BR"
                  ? "Site para cadastro de usuários."
                  : "Website for user registration."}
              </p>
              <Link
                className="uppercase font-bold bg-[#111111] p-3 rounded-full flex items-center gap-2 hover:bg-black transition-all ease-in-out"
                href={"https://github.com/StaanB/cadastro-de-usuario"}
                target="_blank"
              >
                {lang === "pt-BR" ? "Ver no Github" : "View in Github"}
                <BsGithub className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
