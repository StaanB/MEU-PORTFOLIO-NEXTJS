// Import Motion
import { motion } from "framer-motion";

// Import variáveis do Motion
import { NavAnimations } from "../../motionVars";

// Importando Active Link
import { ActiveLink } from "./ActiveLink";

export function NavBar() {
  return (
    <>
      <nav className="w-11/12 h-12 m-auto flex justify-between items-center mb-4">
        <motion.p
          variants={NavAnimations}
          initial="nomeLaranjaFora"
          animate="nomeLaranjaEmTela"
          whileHover="nomeLaranjaHover"
          drag
          dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
          className="text-2xl text-orange-600 font-bold tracking-wider cursor-pointer"
        >
          Stanley
        </motion.p>

        <ul className="text-sm font-bold uppercase flex gap-7 cursor-pointer">
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
        </ul>
      </nav>
    </>
  );
}

