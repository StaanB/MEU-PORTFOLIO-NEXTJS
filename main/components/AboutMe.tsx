// Import Motion
import { motion } from "framer-motion";

// Import Icons
import { BsInfoCircle, BsSpotify, BsYoutube } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { IoGameController } from "react-icons/io5";
import { MdCoffee, MdLocalMovies } from "react-icons/md";
import { CardsAnimation } from "./motionVars";

export function AboutMe() {
  const informations = {
    "Data de nascimento": "08/12/2000",
    Celular: "+55 (71) 9 8689-5914",
    Email: "stanleybrenner@gmail.com",
    Site: "www.esse.site.com",
    Endereço: "Salvador-BA",
  };

  return (
    <>
      <div className="w-screen h-auto flex flex-col justify-center items-center">
        <motion.div
          exit={{ y: "-100vw" }}
          className="w-full flex flex-col justify-center items-center mb-10"
        >
          <BsInfoCircle className="w-8 h-8 mt-10 mb-3 text-orange-600" />

          <motion.h2
            whileInView={{ scale: [1, 1.1, 1, 1.1, 1] }}
            transition={{ duration: 5 }}
            className="mb-8 text-4xl font-bold underline decoration-orange-600"
          >
            Sobre mim
          </motion.h2>
          <p className="text-start w-4/6">
            <span className="text-orange-600 font-bold leading-8">
              Oi, tudo bom? Stan aqui.{" "}
            </span>
            Sou um desenvolvedor Front-end entusiasmado com a tecnologia e a
            forma como acessamos a internet nos dias de hoje. Além de ser um fã
            de quadrinhos e mangás, filmes e músicas. Se quiser falar comigo
            pode entrar em contato que responderei o mais rápido possível.
          </p>
        </motion.div>

        <div className="w-4/6 flex justify-between about-section">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold">Detalhes pessoais</h3>
            <div className="flex gap-7">
              <div>
                {Object.keys(informations).map((info, key) => {
                  return (
                    <p key={key} className="text-orange-600 font-bold mb-3">
                      {info}
                    </p>
                  );
                })}
              </div>
              <div>
                {Object.values(informations).map((valor, key) => {
                  return (
                    <p key={key} className="mb-3 tracking-widest">
                      {valor}
                    </p>
                  );
                })}
              </div>
            </div>
            <p className="flex gap-32 items-center">
              <span className="text-orange-600 font-bold">Status</span>{" "}
              <span className="bg-green-900 p-1 font-bold rounded-md hover:bg-green-700 hover:scale-105 transition ease">
                Buscando vaga JR
              </span>
            </p>
          </div>

          <div className="w-2/6 flex flex-col gap-5">
            <h3 className="text-3xl font-bold">Meus interesses</h3>

            <div className="grid grid-cols-3 gap-6">
              <motion.div
                variants={CardsAnimation}
                whileInView="inView"
                className="card"
              >
                <IoGameController />
                <p>Jogos</p>
              </motion.div>

              <motion.div
                variants={CardsAnimation}
                whileInView="inView"
                className="card"
              >
                <BsYoutube />
                <p>Youtube</p>
              </motion.div>

              <motion.div
                variants={CardsAnimation}
                whileInView="inView"
                className="card"
              >
                <MdLocalMovies />
                <p>Filmes</p>
              </motion.div>

              <motion.div
                variants={CardsAnimation}
                whileInView="inView"
                className="card"
              >
                <MdCoffee />
                <p>Café</p>
              </motion.div>

              <motion.div
                variants={CardsAnimation}
                whileInView="inView"
                className="card"
              >
                <BsSpotify />
                <p>Música</p>
              </motion.div>

              <motion.div
                variants={CardsAnimation}
                whileInView="inView"
                className="card"
              >
                <CgGym />
                <p>Academia</p>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.a
          whileHover="ButtonAnimation"
          variants={CardsAnimation}
          href="https://i.imgur.com/8gtkPc9.png"
          target="_blank"
          className="mt-20 mb-10 border px-4 py-2 flex gap-2 cursor-pointer rounded-md"
        >
          Ver Currículo
        </motion.a>
      </div>
    </>
  );
}
