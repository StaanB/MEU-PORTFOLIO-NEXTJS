// Import Motion
import { motion } from "framer-motion";

// Import tema
import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

// Import variáveis do Motion
import { NavAnimations } from "../../motionVars";

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

  // Tema
  const { theme, lang } = useContext(ThemeContext);

  return (
    <>
      <nav className="max-[699px]:w-96 max-[699px]:m-3 w-auto h-12 flex justify-between items-center mb-4">
        <motion.p
          variants={NavAnimations}
          initial="nomeLaranjaFora"
          animate="nomeLaranjaEmTela"
          whileHover="nomeLaranjaHover"
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
              variants={NavAnimations}
              initial="NavInicioFora"
              animate="NavInicioTela"
              whileHover="NavInicioHover"
              onMouseEnter={() => setInicioHover(true)}
              onMouseLeave={() => setInicioHover(false)}
              style={{ color: inicioHover ? theme?.hexadecimal : "white" }}
            >
              {lang === "pt-BR" ? "Inicio" : "Home"}
            </motion.li>
          </ActiveLink>

          <ActiveLink href="/sobre">
            <motion.li
              id="sobre"
              variants={NavAnimations}
              initial="NavSobreFora"
              animate="NavSobreTela"
              whileHover="NavSobreHover"
              onMouseEnter={() => setSobreHover(true)}
              onMouseLeave={() => setSobreHover(false)}
              style={{ color: sobreHover ? theme?.hexadecimal : "white" }}
            >
              {lang === "pt-BR" ? "Sobre" : "About"}
            </motion.li>
          </ActiveLink>

          <motion.li
            variants={NavAnimations}
            initial="NavHabilidadesFora"
            animate="NavHabilidadesTela"
            whileHover="NavHabilidadesHover"
            onMouseEnter={() => setHabilidadesHover(true)}
            onMouseLeave={() => setHabilidadesHover(false)}
            style={{ color: habilidadesHover ? theme?.hexadecimal : "white" }}
          >
            {lang === "pt-BR" ? "Habilidades" : "Skills"}
          </motion.li>

          <motion.li
            variants={NavAnimations}
            initial="NavProjetoFora"
            animate="NavProjetoTela"
            whileHover="NavProjetoHover"
            onMouseEnter={() => setProjetosHover(true)}
            onMouseLeave={() => setProjetosHover(false)}
            style={{ color: projetosHover ? theme?.hexadecimal : "white" }}
          >
            {lang === "pt-BR" ? "Projetos" : "Projects"}
          </motion.li>

          <motion.li
            variants={NavAnimations}
            initial="NavContatoFora"
            animate="NavContatoTela"
            whileHover="NavContatoHover"
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
