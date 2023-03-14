// Import Motion e MotionVars
import { motion } from "framer-motion";
import { GlobalVars } from "../../motionVars";

// Import Active Link
import { ActiveLink } from "./ActiveLink";

// Import Icones
import { GiHamburgerMenu } from "react-icons/gi";

// Import React
import { useContext, useState } from "react";

// Contexto do idioma
import { ThemeContext } from "../ThemeProvider/ThemeContext";

export const MobileNavBar = () => {
  // Idioma
  const { lang } = useContext(ThemeContext);

  // Mostrar a Nav no celular
  const [navMobile, setNavMobile] = useState(false);

  function showNavBar() {
    const navbar = document.getElementById("mobile-nav") as HTMLElement;

    if (navMobile === false) {
      navbar.classList.remove("oculto");
      navbar.classList.add("em-tela");
      setNavMobile(true);
    } else {
      navbar.classList.remove("em-tela");
      navbar.classList.add("oculto");
      setNavMobile(false);
    }
  }

  return (
    <>
      <button
        onClick={showNavBar}
        className="min-[700px]:hidden absolute left-[98%] "
      >
        <GiHamburgerMenu className="text-2xl" />
      </button>
      <nav>
        <motion.ul
          id="mobile-nav"
          className="oculto max-[700px]:flex z-20 bg-[#27272a] rounded-md p-3 text-sm font-bold uppercase hidden gap-7 relative top-32 left-4 right-0 bottom-0"
        >
          <ActiveLink href="/">
            <motion.li
              id="inicio"
              variants={GlobalVars}
              initial="elementoXFora2"
              animate="elementoXEmTela"
              whileHover="elementoHover2"
            >
              {lang === "pt-BR" ? "Inicio" : "Home"}
            </motion.li>
          </ActiveLink>

          <ActiveLink href="/about">
            <motion.li
              id="sobre"
              variants={GlobalVars}
              initial="elementoXFora2"
              animate="delayX2"
              whileHover="elementoHover2"
            >
              {lang === "pt-BR" ? "Sobre" : "About"}
            </motion.li>
          </ActiveLink>

          <ActiveLink href="/skills">
            <motion.li
              variants={GlobalVars}
              initial="elementoXFora2"
              animate="delayX4"
              whileHover="elementoHover2"
            >
              {lang === "pt-BR" ? "Habilidades" : "Skills"}
            </motion.li>
          </ActiveLink>

          <ActiveLink href="/projects">
            <motion.li
              variants={GlobalVars}
              initial="elementoXFora2"
              animate="delayX6"
              whileHover="elementoHover2"
            >
              {lang === "pt-BR" ? "Projetos" : "Projects"}
            </motion.li>
          </ActiveLink>

          <motion.li
            variants={GlobalVars}
            initial="elementoXFora2"
            animate="delayX8"
            whileHover="elementoHover2"
          >
            {lang === "pt-BR" ? "Contato" : "Contact"}
          </motion.li>
        </motion.ul>
      </nav>
    </>
  );
};
