// Import Motion
import { motion } from "framer-motion";

// Import variáveis do Motion
import { NavAnimations } from "../../motionVars";

// Importando Active Link
import { ActiveLink } from "./ActiveLink";
import { MobileNavBar } from "./MobileNavBar";

export function NavBar() {
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
          className="text-2xl text-orange-600 ml-9 font-bold tracking-wider cursor-pointer"
        >
          Stanley
        </motion.p>

        <MobileNavBar />

        <ul className="max-[700px]:hidden mr-4 text-sm font-bold uppercase flex gap-7 cursor-pointer">
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
