// Import Motion e MotionVars
import { motion } from "framer-motion";
import { NavAnimations } from "../../motionVars";

// Import Active Link
import { ActiveLink } from "./ActiveLink";

// Import Icones
import { GiHamburgerMenu } from "react-icons/gi";

// Import React
import { useState } from "react";

export const MobileNavBar = () => {
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
              variants={NavAnimations}
              initial="NavInicioFora"
              animate="NavInicioTela"
              whileHover="NavInicioHover"
            >
              Inicio
            </motion.li>
          </ActiveLink>

          <ActiveLink href="/sobre">
            <motion.li
              id="sobre"
              variants={NavAnimations}
              initial="NavSobreFora"
              animate="NavSobreTela"
              whileHover="NavSobreHover"
            >
              Sobre
            </motion.li>
          </ActiveLink>

          <motion.li
            variants={NavAnimations}
            initial="NavHabilidadesFora"
            animate="NavHabilidadesTela"
            whileHover="NavHabilidadesHover"
          >
            Habilidades
          </motion.li>

          <motion.li
            variants={NavAnimations}
            initial="NavProjetoFora"
            animate="NavProjetoTela"
            whileHover="NavProjetoHover"
          >
            Projetos
          </motion.li>

          <motion.li
            variants={NavAnimations}
            initial="NavContatoFora"
            animate="NavContatoTela"
            whileHover="NavContatoHover"
          >
            Contato
          </motion.li>
        </motion.ul>
      </nav>
    </>
  );
};
