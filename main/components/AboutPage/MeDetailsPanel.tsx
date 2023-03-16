// Import motion e variaveis
import { motion } from "framer-motion";
import { GlobalVars } from "../motionVars";

// Temas e idiomas
import { useContext, useState } from "react";
import { ThemeContext } from "../HomePage/ThemeProvider/ThemeContext";

// Fotos
import Image from "next/image";
import Guanabara from "../../assets/guanabara.jpg";
import Attekita from "../../assets/attekita.jpg";
import Igor from "../../assets/igor.jpg";
import Diego from "../../assets/diego.png";
import Genshin from "../../assets/genshin.webp";
import Matrix from "../../assets/matrix.jpg";
import Jujutsu from "../../assets/jujutsu.png";
import Nirvana from "../../assets/nirvana.jpg";

export function MeDetailsPanel() {
  // Tema e idioma
  const { theme, lang } = useContext(ThemeContext);

  // Fotos de programadores clicadas
  const [guanabaraClicked, setGuanabaraClicked] = useState(false);
  const [attekitaClicked, setAttekitaClicked] = useState(false);
  const [igorClicked, setIgorClicked] = useState(false);
  const [diegoClicked, setDiegoClicked] = useState(false);

  //   Foto dos hobbies clicadas
  // Fotos de programadores clicadas
  const [genshinClicked, setGenshinClicked] = useState(false);
  const [matrixClicked, setMatrixClicked] = useState(false);
  const [jujutsuClicked, setJujutsuClicked] = useState(false);
  const [nirvanaClicked, setNirvanaClicked] = useState(false);

  return (
    <div className="max-[1500px]:gap-0 max-[699px]:ml-7 w-5/6 flex items-center justify-between gap-36 z-10">
      {/* Sessão de inspirações */}
      <div className="w-4/6 flex flex-col items-center">
        <div className="max-[699px]:gap-0 max-[1080px]:flex-col w-full items-center flex justify-between gap-10 mb-5">
          <motion.div
            variants={GlobalVars}
            initial="elementoYFora"
            animate="elementoYEmTela"
            exit="elementoSaindo"
            className="about-small-pictures"
          >
            <Image
              src={Guanabara}
              priority
              placeholder="blur"
              alt="Guanabara"
              onClick={
                guanabaraClicked
                  ? () => {
                      setGuanabaraClicked(false);
                    }
                  : () => {
                      setGuanabaraClicked(true);
                    }
              }
              style={{
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
              className="bg-cover bg-no-repeat w-24 h-24 rounded-full border-solid border-4 cursor-pointer hover:scale-110 transition-all ease-in-out"
            />
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              animate={guanabaraClicked ? { opacity: 1 } : { opacity: 0 }}
              className={guanabaraClicked ? "inline" : "oculto"}
            >
              {lang === "pt-BR"
                ? "O professor Gustavo Guanabara dá aulas gratuitamente no seu canal do Youtube, foi o meu primeiro professor, canal dele "
                : "Gustavo Guanabara gives classes for free on his Youtube channel, he was my first teacher, his channel "}
              <a
                href="https://www.youtube.com/@CursoemVideo"
                target="_blank"
                style={{ color: theme?.hexadecimal }}
              >
                {lang === "pt-BR" ? "aqui" : "here"}
              </a>
              .
            </motion.span>
          </motion.div>

          <motion.div
            variants={GlobalVars}
            initial="elementoYFora"
            animate="delayY2"
            exit="elementoSaindo"
            className="about-small-pictures"
          >
            <Image
              src={Attekita}
              priority
              placeholder="blur"
              alt="Attekita"
              onClick={
                attekitaClicked
                  ? () => {
                      setAttekitaClicked(false);
                    }
                  : () => {
                      setAttekitaClicked(true);
                    }
              }
              style={{
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
              className="bg-cover bg-no-repeat w-24 h-24 rounded-full border-solid border-4 cursor-pointer hover:scale-110 transition-all ease-in-out"
            />
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              animate={attekitaClicked ? { opacity: 1 } : { opacity: 0 }}
              className={attekitaClicked ? "inline" : "oculto"}
            >
              {lang === "pt-BR"
                ? "Karol Attekita é uma youtuber que fala sobre programação, um dos poucos canal que acompanho ativamente, canal dela no youtube "
                : "Karol Attekita is a youtuber who talks about programming, one of the few channels that I actively follow, her youtube channel "}
              <a
                href="https://www.youtube.com/@attekitadev"
                target="_blank"
                style={{ color: theme?.hexadecimal }}
              >
                {lang === "pt-BR" ? "aqui" : "here"}
              </a>
              .
            </motion.span>
          </motion.div>

          <motion.div
            variants={GlobalVars}
            initial="elementoYFora"
            animate="delayY4"
            exit="elementoSaindo"
            className="about-small-pictures"
          >
            <Image
              src={Igor}
              priority
              placeholder="blur"
              alt="Igor"
              onClick={
                igorClicked
                  ? () => {
                      setIgorClicked(false);
                    }
                  : () => {
                      setIgorClicked(true);
                    }
              }
              style={{
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
              className="bg-cover bg-no-repeat w-24 h-24 rounded-full border-solid border-4 cursor-pointer hover:scale-110 transition-all ease-in-out"
            />
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              animate={igorClicked ? { opacity: 1 } : { opacity: 0 }}
              className={igorClicked ? "inline" : "oculto"}
            >
              {lang === "pt-BR"
                ? "Igor Oliveira é programador e Youtuber, primeiro curso que fiz da área e onde tive contato com minhas primeiras ferramentas, canal dele "
                : "Igor Oliveira is a programmer and Youtuber, the first course I took in the area and where I had contact with my first tools, his channel "}
              <a
                href="https://www.youtube.com/@Programadorbr"
                target="_blank"
                style={{ color: theme?.hexadecimal }}
              >
                {lang === "pt-BR" ? "aqui" : "here"}
              </a>
              .
            </motion.span>
          </motion.div>

          <motion.div
            variants={GlobalVars}
            initial="elementoYFora"
            animate="delayY6"
            exit="elementoSaindo"
            className="about-small-pictures"
          >
            <Image
              src={Diego}
              priority
              placeholder="blur"
              alt="Diego Rocketseat"
              onClick={
                diegoClicked
                  ? () => {
                      setDiegoClicked(false);
                    }
                  : () => {
                      setDiegoClicked(true);
                    }
              }
              style={{
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
              className="bg-cover bg-no-repeat w-24 h-24 rounded-full border-solid border-4 cursor-pointer hover:scale-110 transition-all ease-in-out"
            />
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              animate={diegoClicked ? { opacity: 1 } : { opacity: 0 }}
              className={diegoClicked ? "inline" : "oculto"}
            >
              {lang === "pt-BR"
                ? "Graças ao Diego e a Rocketseat progredi muito na programação, tanto com o ignite quanto com o NLW e recomendo, site da rocket "
                : "Thanks to Diego and Rocketseat I progressed a lot in programming, both with ignite and NLW and I recommend it, rocket website "}
              <a
                href="https://www.rocketseat.com.br"
                target="_blank"
                style={{ color: theme?.hexadecimal }}
              >
                {lang === "pt-BR" ? "aqui" : "here"}
              </a>
              .
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Sessão de passatempos */}
      <div className="w-4/6 flex flex-col items-center">
        <div className="max-[1080px]:gap-1 max-[1080px]:flex-col w-full items-center flex justify-between gap-10">
          <motion.div
            variants={GlobalVars}
            initial="elementoYFora"
            animate="delayY6"
            exit="elementoSaindo"
            className="about-small-pictures"
          >
            <Image
              src={Genshin}
              priority
              placeholder="blur"
              alt="Genshin Impact Logo"
              onClick={
                genshinClicked
                  ? () => {
                      setGenshinClicked(false);
                    }
                  : () => {
                      setGenshinClicked(true);
                    }
              }
              style={{
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
              className="bg-cover bg-no-repeat w-24 h-24 rounded-full border-solid border-4 cursor-pointer hover:scale-110 transition-all ease-in-out"
            />
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              animate={genshinClicked ? { opacity: 1 } : { opacity: 0 }}
              className={genshinClicked ? "inline" : "oculto"}
            >
              {lang === "pt-BR"
                ? "Além de Genshin Impact jogo alguns outros jogos como Brawlhalla, Osu e alguns outros. Vamos jogar!!"
                : "Besides Genshin Impact I play some other games like Brawlhalla, Osu and some others. Let's Play!!"}
            </motion.span>
          </motion.div>

          <motion.div
            variants={GlobalVars}
            initial="elementoYFora"
            animate="delayY4"
            exit="elementoSaindo"
            className="about-small-pictures"
          >
            <Image
              src={Matrix}
              priority
              placeholder="blur"
              alt="Matrix Movie"
              onClick={
                matrixClicked
                  ? () => {
                      setMatrixClicked(false);
                    }
                  : () => {
                      setMatrixClicked(true);
                    }
              }
              style={{
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
              className="bg-cover bg-no-repeat w-24 h-24 rounded-full border-solid border-4 cursor-pointer hover:scale-110 transition-all ease-in-out"
            />
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              animate={matrixClicked ? { opacity: 1 } : { opacity: 0 }}
              className={matrixClicked ? "inline" : "oculto"}
            >
              {lang === "pt-BR"
                ? "Vejo filmes quando tenho tempo, Matrix, Vingadores, Poderoso chefão são os meus favoritos."
                : "I watch movies when I have time, The Matrix, Avengers, Godfather are my favorites."}
            </motion.span>
          </motion.div>

          <motion.div
            variants={GlobalVars}
            initial="elementoYFora"
            animate="delayY2"
            exit="elementoSaindo"
            className="about-small-pictures"
          >
            <Image
              src={Jujutsu}
              priority
              placeholder="blur"
              alt="Jujutsu Kaisen anime"
              onClick={
                jujutsuClicked
                  ? () => {
                      setJujutsuClicked(false);
                    }
                  : () => {
                      setJujutsuClicked(true);
                    }
              }
              style={{
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
              className="bg-cover bg-no-repeat w-24 h-24 rounded-full border-solid border-4 cursor-pointer hover:scale-110 transition-all ease-in-out"
            />
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              animate={jujutsuClicked ? { opacity: 1 } : { opacity: 0 }}
              className={jujutsuClicked ? "inline" : "oculto"}
            >
              {lang === "pt-BR"
                ? "Jujutsu, Hunter x Hunter, Kimetsu no Yaiba são apenas alguns dos meus animes favoritos."
                : "Jujutsu, Hunter x Hunter, Kimetsu no Yaiba are just some of my favorite animes."}
            </motion.span>
          </motion.div>

          <motion.div
            variants={GlobalVars}
            initial="elementoYFora"
            animate="elementoYEmTela"
            exit="elementoSaindo"
            className="about-small-pictures"
          >
            <Image
              src={Nirvana}
              priority
              placeholder="blur"
              alt="Nirvana band"
              onClick={
                nirvanaClicked
                  ? () => {
                      setNirvanaClicked(false);
                    }
                  : () => {
                      setNirvanaClicked(true);
                    }
              }
              style={{
                borderColor: theme?.hexadecimal,
                boxShadow: theme?.shadow,
              }}
              className="bg-cover bg-no-repeat w-24 h-24 rounded-full border-solid border-4 cursor-pointer hover:scale-110 transition-all ease-in-out"
            />
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              animate={nirvanaClicked ? { opacity: 1 } : { opacity: 0 }}
              className={nirvanaClicked ? "inline" : "oculto"}
            >
              {lang === "pt-BR"
                ? "Nirvana = minha banda favorita, mas gosto de Harry Styles, The Weekend, Joji, Artic Monkeys..."
                : "Nirvana = my favorite band, but I like Harry Styles, The Weekend, Joji, Arctic Monkeys..."}
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
