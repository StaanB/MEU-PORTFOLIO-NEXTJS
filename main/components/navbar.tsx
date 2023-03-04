// Import Motion
import { motion } from "framer-motion";

// Import variáveis do Motion
import {
  navTitulo,
  navInicio,
  navSobre,
  navHabilidades,
  navProjetos,
  navContato,
} from "./motionVars";

// Import Link do NextJS
import Link from "next/link";

export function NavBar() {
  return (
    <>
      <nav className="w-11/12 h-12 m-auto flex justify-between items-center mb-4">
        <motion.p
          variants={navTitulo}
          initial="oculto"
          animate="emTela"
          whileHover={{ scale: 1.1 }}
          drag
          dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
          className="text-2xl text-orange-600 font-bold tracking-wider cursor-pointer"
        >
          Stanley
        </motion.p>

        <ul className="text-sm font-bold uppercase flex gap-7 cursor-pointer">
          <Link href="/">
            <motion.li
              variants={navInicio}
              initial="oculto"
              animate="emTela"
              whileHover={{
                scale: 1.2,
                originX: 0,
                color: "#ea580c",
              }}
            >
              Inicio
            </motion.li>
          </Link>

          <Link href="/sobre">
            <motion.li
              variants={navSobre}
              initial="oculto"
              animate="emTela"
              whileHover={{
                scale: 1.2,
                originX: 0,
                color: "#ea580c",
              }}
            >
              Sobre
            </motion.li>
          </Link>

          <motion.li
            variants={navHabilidades}
            initial="oculto"
            animate="emTela"
            whileHover={{
              scale: 1.2,
              originX: 0,
              color: "#ea580c",
            }}
          >
            Habilidades
          </motion.li>

          <motion.li
            variants={navProjetos}
            initial="oculto"
            animate="emTela"
            whileHover={{
              scale: 1.2,
              originX: 0,
              color: "#ea580c",
            }}
          >
            Projetos
          </motion.li>

          <motion.li
            variants={navContato}
            initial="oculto"
            animate="emTela"
            whileHover={{
              scale: 1.2,
              originX: 0,
              color: "#ea580c",
            }}
          >
            Contato
          </motion.li>
        </ul>
      </nav>
    </>
  );
}
