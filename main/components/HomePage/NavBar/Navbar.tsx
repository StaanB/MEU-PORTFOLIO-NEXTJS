// Import Motion
import { motion } from "framer-motion";

// Import tema e idioma
import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

// Import variáveis do Motion
import { GlobalVars } from "../../motionVars";

// Importando Active Link
import { ActiveLink } from "./ActiveLink";
import { MobileNavBar } from "./MobileNavBar";

export function NavBar() {
  // Nav hover de acordo com o tema
  const [inicioHover, setInicioHover] = useState(false);
  const [sobreHover, setSobreHover] = useState(false);
  const [habilidadesHover, setHabilidadesHover] = useState(false);
  const [projetosHover, setProjetosHover] = useState(false);
  const [contatosHover, setContatosHover] = useState(false);

  // Tema e idioma
  const { theme, lang } = useContext(ThemeContext);

  return (
    <>
      <nav className="max-[699px]:w-96 max-[699px]:m-3 w-auto h-12 flex justify-between items-center mb-4">
        <motion.p
          variants={GlobalVars}
          initial="elementoXFora2"
          animate="elementoXEmTela"
          whileHover="elementoHover2"
          drag
          dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
          className="text-2xl ml-9 font-bold tracking-wider cursor-pointer"
          style={{ color: theme?.hexadecimal }}
        >
          Stanley
        </motion.p>

        <MobileNavBar />

        <ul className="max-[700px]:hidden mr-5 text-sm font-bold uppercase flex gap-7 cursor-pointer">
          <ActiveLink href="/">
            <motion.li
              id="inicio"
              variants={GlobalVars}
              initial="elementoXFora"
              animate="elementoXEmTela"
              whileHover="elementoHover2"
              onMouseEnter={() => setInicioHover(true)}
              onMouseLeave={() => setInicioHover(false)}
              style={{ color: inicioHover ? theme?.hexadecimal : "white" }}
            >
              {lang === "pt-BR" ? "Inicio" : "Home"}
            </motion.li>
          </ActiveLink>

          <ActiveLink href="/about">
            <motion.li
              id="sobre"
              variants={GlobalVars}
              initial="elementoXFora"
              animate="delayX2"
              whileHover="elementoHover2"
              onMouseEnter={() => setSobreHover(true)}
              onMouseLeave={() => setSobreHover(false)}
              style={{ color: sobreHover ? theme?.hexadecimal : "white" }}
            >
              {lang === "pt-BR" ? "Sobre" : "About"}
            </motion.li>
          </ActiveLink>

          <ActiveLink href="/skills">
            <motion.li
              variants={GlobalVars}
              initial="elementoXFora"
              animate="delayX4"
              whileHover="elementoHover2"
              onMouseEnter={() => setHabilidadesHover(true)}
              onMouseLeave={() => setHabilidadesHover(false)}
              style={{ color: habilidadesHover ? theme?.hexadecimal : "white" }}
            >
              {lang === "pt-BR" ? "Habilidades" : "Skills"}
            </motion.li>
          </ActiveLink>

          <motion.li
            variants={GlobalVars}
            initial="elementoXFora"
            animate="delayX6"
            whileHover="elementoHover2"
            onMouseEnter={() => setProjetosHover(true)}
            onMouseLeave={() => setProjetosHover(false)}
            style={{ color: projetosHover ? theme?.hexadecimal : "white" }}
          >
            {lang === "pt-BR" ? "Projetos" : "Projects"}
          </motion.li>

          <motion.li
            variants={GlobalVars}
            initial="elementoXFora"
            animate="delayX8"
            whileHover="elementoHover2"
            onMouseEnter={() => setContatosHover(true)}
            onMouseLeave={() => setContatosHover(false)}
            style={{ color: contatosHover ? theme?.hexadecimal : "white" }}
          >
            {lang === "pt-BR" ? "Contato" : "Contact"}
          </motion.li>
        </ul>
      </nav>
    </>
  );
}
