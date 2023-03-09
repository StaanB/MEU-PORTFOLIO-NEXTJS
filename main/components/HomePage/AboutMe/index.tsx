// Import Motion
import { motion } from "framer-motion";
import { useContext, useState } from "react";

// Import Icons
import { BsInfoCircle, BsSpotify, BsYoutube } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { IoGameController } from "react-icons/io5";
import { MdCoffee, MdLocalMovies } from "react-icons/md";
import { CardsAnimation } from "../../motionVars";

// Tema
import { ThemeContext } from "../ThemeProvider/ThemeContext";

export function AboutMe() {
  // Setando Hover de acordo com o tema
  const [jogosHover, setJogosHover] = useState(false);
  const [youtubeHover, setYoutubeHover] = useState(false);
  const [filmesHover, setFilmesHover] = useState(false);
  const [cafeHover, setCafeHover] = useState(false);
  const [musicaHover, setMusicaHover] = useState(false);
  const [academiaHover, setAcademiaHover] = useState(false);
  const [curriculoHover, setCurriculoHover] = useState(false);

  // tema
  const { theme, lang } = useContext(ThemeContext);

  const informationsBR = {
    "Data de nascimento": "08-12-2000",
    Celular: "+55 (71) 9 8689-5914",
    Email: "stanleybrenner@gmail.com",
    Site: "www.esse.site.com",
    Endereço: "Salvador-BA",
  };

  const informationsEN = {
    Birthdate: "08-12-2000",
    Phone: "+55 71986895914",
    Email: "stanleybrenner@gmail.com",
    Website: "www.esse.site.com",
    Addres: "Brazil Salvador-BA",
  };

  return (
    <>
      <div className="max-[699px]:w-96 max-[699px]:ml-5 w-screen h-auto flex flex-col justify-center items-center">
        <motion.div
          exit={{ y: "-100vw" }}
          className="max-[699px]:w-5/6 w-full flex flex-col justify-center items-center mb-10"
        >
          <BsInfoCircle
            className="w-8 h-8 mt-10 mb-3"
            style={{ color: theme?.hexadecimal }}
          />

          <motion.h2
            whileInView={{ scale: [1, 1.1, 1, 1.1, 1] }}
            transition={{ duration: 5 }}
            className="mb-8 text-4xl font-bold underline"
            style={{ textDecorationColor: theme?.hexadecimal }}
          >
            {lang === "pt-BR" ? "Sobre mim" : "About me"}
          </motion.h2>
          <p className="max-[699px]:w-5/6 max-[699px]:text-left text-start w-4/6">
            <span
              className="font-bold leading-8"
              style={{ color: theme?.hexadecimal }}
            >
              {lang === "pt-BR"
                ? "Oi, tudo bom? Stan aqui"
                : "Hey, how are you? Stan Here"}{" "}
            </span>
            {lang === "pt-BR"
              ? "Sou um desenvolvedor Front-end entusiasmado com a tecnologia e a forma como acessamos a internet nos dias de hoje. Além de ser um fã de quadrinhos e mangás, filmes e músicas. Se quiser falar comigo pode entrar em contato que responderei o mais rápido possível."
              : "I'm a Front-end developer enthusiastic about technology and the way we access the internet these days. As well as being a fan of comics and manga, movies and music. If you want to talk to me, you can contact me and I will respond as soon as possible."}
          </p>
        </motion.div>

        <div className="max-[699px]:w-5/6 max-[699px]:flex-col max-[375px]:text-center max-[1080px]:flex-col w-4/6 flex justify-between about-section">
          <div className="max-[1080px]:mb-10 flex flex-col gap-6">
            <h3 className="max-[699px]:text-2xl text-3xl font-bold">
              {lang === "pt-BR" ? "Detalhes Pessoais" : "Personal Details"}
            </h3>
            <div className="max-[375px]:text-sm  flex gap-7">
              <div>
                {Object.keys(
                  lang === "pt-BR" ? informationsBR : informationsEN
                ).map((info, key) => {
                  return (
                    <p
                      key={key}
                      className="max-[699px]:text-left max-[699px]:mb-4 font-bold mb-3"
                      style={{ color: theme?.hexadecimal }}
                    >
                      {info}
                    </p>
                  );
                })}
              </div>
              <div>
                {Object.values(
                  lang === "pt-BR" ? informationsBR : informationsEN
                ).map((valor, key) => {
                  return (
                    <p
                      key={key}
                      className="max-[699px]:mb-[1.40rem] max-[699px]:text-left mb-3 tracking-[0.1rem] font-bold"
                    >
                      {valor}
                    </p>
                  );
                })}
              </div>
            </div>
            <p className="flex gap-32 items-center">
              <span className="font-bold" style={{ color: theme?.hexadecimal }}>
                Status
              </span>{" "}
              <span className="bg-green-900 p-1 font-bold rounded-md hover:bg-green-700 hover:scale-110 transition ease">
                {lang === "pt-BR"
                  ? "Buscando vaga JR"
                  : "Looking for dev JR job"}
              </span>
            </p>
          </div>

          <div className="max-[1080px]:items-center max-[1080px]:w-full w-2/6 flex flex-col gap-5">
            <h3 className="max-[699px]:text-2xl max-[375px]:w-72 text-3xl font-bold">
              {lang === "pt-BR" ? "Meus Interesses" : "My Interests"}
            </h3>

            <div className="max-[375px]:grid-cols-1 max-[1080px]:grid-cols-2 max-[1080px]:gap-24  grid grid-cols-3 gap-6">
              <motion.div
                variants={CardsAnimation}
                whileInView="inView"
                className="card"
                onMouseEnter={() => setJogosHover(true)}
                onMouseLeave={() => setJogosHover(false)}
                style={{ color: jogosHover ? theme?.hexadecimal : "white" }}
              >
                <IoGameController />
                <p>{lang === "pt-BR" ? "Jogos" : "Games"}</p>
              </motion.div>

              <motion.div
                variants={CardsAnimation}
                whileInView="inView"
                className="card"
                onMouseEnter={() => setYoutubeHover(true)}
                onMouseLeave={() => setYoutubeHover(false)}
                style={{ color: youtubeHover ? theme?.hexadecimal : "white" }}
              >
                <BsYoutube />
                <p>Youtube</p>
              </motion.div>

              <motion.div
                variants={CardsAnimation}
                whileInView="inView"
                className="card"
                onMouseEnter={() => setFilmesHover(true)}
                onMouseLeave={() => setFilmesHover(false)}
                style={{ color: filmesHover ? theme?.hexadecimal : "white" }}
              >
                <MdLocalMovies />
                <p>{lang === "pt-BR" ? "Filmes" : "Movies"}</p>
              </motion.div>

              <motion.div
                variants={CardsAnimation}
                whileInView="inView"
                className="card"
                onMouseEnter={() => setCafeHover(true)}
                onMouseLeave={() => setCafeHover(false)}
                style={{ color: cafeHover ? theme?.hexadecimal : "white" }}
              >
                <MdCoffee />
                <p>{lang === "pt-BR" ? "Café" : "Coffee"}</p>
              </motion.div>

              <motion.div
                variants={CardsAnimation}
                whileInView="inView"
                className="card"
                onMouseEnter={() => setMusicaHover(true)}
                onMouseLeave={() => setMusicaHover(false)}
                style={{ color: musicaHover ? theme?.hexadecimal : "white" }}
              >
                <BsSpotify />
                <p>{lang === "pt-BR" ? "Música" : "Music"}</p>
              </motion.div>

              <motion.div
                variants={CardsAnimation}
                whileInView="inView"
                className="card"
                onMouseEnter={() => setAcademiaHover(true)}
                onMouseLeave={() => setAcademiaHover(false)}
                style={{ color: academiaHover ? theme?.hexadecimal : "white" }}
              >
                <CgGym />
                <p>{lang === "pt-BR" ? "Academia" : "Gym"}</p>
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
          onMouseEnter={() => setCurriculoHover(true)}
          onMouseLeave={() => setCurriculoHover(false)}
          style={{
            backgroundColor: curriculoHover
              ? theme?.hexadecimal
              : "var(--cinza-600)",
            borderColor: curriculoHover ? theme?.hexadecimal : "white",
          }}
        >
          {lang === "pt-BR" ? "Ver currículo" : "View curriculum"}
        </motion.a>
      </div>
    </>
  );
}
