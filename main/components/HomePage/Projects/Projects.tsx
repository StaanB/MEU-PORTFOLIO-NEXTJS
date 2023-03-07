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

export function Habilities() {
  return (
    <>
      <motion.div className="w-screen h-auto flex flex-col justify-center items-center">
        <div className="w-full flex flex-col  justify-center items-center mb-20">
          <BsBriefcaseFill className="w-8 h-8 mt-10 text-orange-600" />
          <motion.h2
            whileInView={{ scale: [1, 1.1, 1, 1.1, 1] }}
            transition={{ duration: 5 }}
            className="mb-20 text-4xl font-bold underline decoration-orange-600"
          >
            Projetos
          </motion.h2>
          <div className="w-4/6 flex max-[640px]:flex-col items-center justify-between">
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
                Site de controle de despesas.
              </p>
              <Link
                className="uppercase font-bold bg-[#111111] p-3 rounded-full flex items-center gap-2 hover:bg-black transition-all ease-in-out"
                href={"https://github.com/StaanB/st-money"}
                target="_blank"
              >
                Ver no Github
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
                Site do motogrupo legião sem Fronteiras.
              </p>
              <Link
                className="uppercase font-bold bg-[#111111] p-3 rounded-full flex items-center gap-2 hover:bg-black transition-all ease-in-out"
                href={"https://github.com/StaanB/legiao-sem-fronteiras"}
                target="_blank"
              >
                Ver no Github
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
                Site para cadastros de usuários.
              </p>
              <Link
                className="uppercase font-bold bg-[#111111] p-3 rounded-full flex items-center gap-2 hover:bg-black transition-all ease-in-out"
                href={"https://github.com/StaanB/cadastro-de-usuario"}
                target="_blank"
              >
                Ver no Github
                <BsGithub className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
