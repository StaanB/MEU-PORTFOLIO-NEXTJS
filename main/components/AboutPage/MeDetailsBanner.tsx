// Motion e Motion Vars
import { motion } from "framer-motion";
import { HeroBannerVars } from "../motionVars";

// Tema e língua
import { useContext } from "react";
import { ThemeContext } from "../HomePage/ThemeProvider/ThemeContext";

// Icone
import { BsInfoCircle } from "react-icons/bs";

export function MeDetailsBanner() {
  // Tema e língua
  const { theme, lang } = useContext(ThemeContext);

  return (
    <div className="w-5/6 flex flex-col items-center justify-between gap-20 mb-10">
      <motion.div exit={{ opacity: 0 }} className="flex flex-col items-center">
        <BsInfoCircle
          className="w-8 h-8 mt-5 mb-3"
          style={{ color: theme?.hexadecimal }}
        />
        <motion.h2
          whileInView={{ scale: [1, 1.1, 1, 1.1, 1] }}
          transition={{ duration: 5 }}
          className="mb-8 text-4xl font-bold underline"
          style={{ textDecorationColor: theme?.hexadecimal }}
        >
          {lang === "pt-BR" ? "Quem sou eu?" : "Who I am?"}
        </motion.h2>

        <motion.div
          variants={HeroBannerVars}
          exit={{ opacity: 0 }}
          initial="containerOculto"
          animate="containerEmTela"
          whileHover="fotoHover"
          className="bg-euAbout bg-cover bg-no-repeat w-72 h-72 rounded-full border-solid border-4"
          style={{
            borderColor: theme?.hexadecimal,
            boxShadow: theme?.shadow,
          }}
        ></motion.div>

        <div className="w-full flex justify-between items-center gap-60">
          <motion.div
            exit={{ opacity: 0 }}
            className="w-4/6 flex flex-col items-center"
          >
            <motion.h1
              variants={HeroBannerVars}
              initial="h1Fora"
              animate="h1EmTela"
              style={{ color: theme?.hexadecimal }}
              className="text-3xl mb-3 font-bold"
            >
              {lang === "pt-BR" ? "Eu e o HTML" : "Me and HTML"}
            </motion.h1>
            <motion.p
              variants={HeroBannerVars}
              initial="pFora"
              animate="pEmTela"
              className="text-justify text-lg font-thin break-words"
            >
              {lang === "pt-BR"
                ? "Comecei a programar no final de 2020, quando assisti a minha primeira aula de Python com o professor Gustavo Guanabara (grande fã inclusive), depois disso me interessei pela área e resolvi estudar mais a sério, meu primeiro site em HTML era um "
                : "Let's talk a little about myself then... I started programming at the end of 2020, when I attended my first Python class with teacher Gustavo Guanabara (excelent teacher), after that I became interested in the area and decided to study more seriously, my first HTML website was a "}
              <code>"Hello World" </code>
              {lang === "pt-BR"
                ? "com fundo azul, depois disso fui querendo aprender cada vez mais, ingressei na faculdade de análise de sistemas (ainda cursando), além disso fiz algumas landing pages como freelancer, aprendi ReactJS e agora estou começando a utilizar o NextJS para fazer meus sites, sei algumas coisas de Back-end como Node e MongoDB mas ainda não muita coisa."
                : "with a blue background, after that I wanted to learn more and more, I entered the college of systems analysis (still studying), I also made some landing pages as a freelancer, I learned ReactJS and now I'm starting to use NextJS to make my websites, I know some Back-end stuff like Node and MongoDB but still not much."}
            </motion.p>
          </motion.div>

          <motion.div
            exit={{ opacity: 0 }}
            className="w-4/6 flex flex-col items-center"
          >
            <motion.h1
              variants={HeroBannerVars}
              initial="h1Fora"
              animate="h1EmTela"
              style={{ color: theme?.hexadecimal }}
              className="text-3xl mb-3 font-bold"
            >
              {lang === "pt-BR" ? "Passatempos" : "Hobbies"}
            </motion.h1>
            <motion.p
              variants={HeroBannerVars}
              initial="pFora"
              animate="pEmTela"
              className="text-justify text-lg font-thin"
            >
              {lang === "pt-BR"
                ? "Tenho vários passatempos, no geral costumo jogar alguns jogos com o tempo livre como Genshin Impact e outros, minha trilogia favorita do cinema é Matrix indiscutivelmente, não sou muito fã de séries mas gosto muito de animes e mangás recomendo Jujutsu Kaisen pra quem também gostar de assistir, além disso escuto bastante música desde rock como Nirvana até um bom pop como Harry Styles, caso queira conversar comigo teremos uma boa e longa conversa sobre qualquer coisa da cultura pop ou até mesmo sobre algo que eu não conheça ainda."
                : "I have several hobbies, in general I usually play some games with my free time like Genshin Impact and others, my favorite movie trilogy is the Matrix without a doubt, I'm not a big fan of series but I really like anime and manga I recommend Jujutsu Kaisen to anyone who also likes to attend, I also listen to a lot of music from rock like Nirvana to good pop like Harry Styles, if you want to talk to me we'll have a good and long talk about anything from pop culture or even something I don't know yet."}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
