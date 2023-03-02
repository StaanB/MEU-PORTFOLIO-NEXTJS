import { motion } from "framer-motion";
import Link from "next/link";

export function NavBar() {
  return (
    <>
      <nav className="w-11/12 h-12 m-auto flex justify-between items-center mb-4">
        <motion.p
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            duration: 0.8,
          }}
          whileHover={{ scale: 1.1 }}
          drag
          dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
          className="text-2xl text-orange-600 font-bold tracking-wider cursor-pointer"
        >
          Stanley
        </motion.p>

        <ul className="text-sm font-bold uppercase flex gap-5 cursor-pointer">
          <Link href="/">
            <motion.li
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 0.8,
                delay: 0.1,
              }}
              whileHover={{ scale: 1.2, color: "var(--laranja-600)" }}
            >
              Inicio
            </motion.li>
          </Link>

          <Link href="/sobre">
            <motion.li
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 0.8,
                delay: 0.2,
              }}
              whileHover={{ scale: 1.2, color: "var(--laranja-600)" }}
            >
              Sobre
            </motion.li>
          </Link>

          <motion.li
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 0.8,
              delay: 0.3,
            }}
            whileHover={{ scale: 1.2, color: "var(--laranja-600)" }}
          >
            Habilidades
          </motion.li>

          <motion.li
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 0.8,
              delay: 0.4,
            }}
            whileHover={{ scale: 1.2, color: "var(--laranja-600)" }}
          >
            Projetos
          </motion.li>

          <motion.li
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 0.8,
              delay: 0.5,
            }}
            whileHover={{ scale: 1.2, color: "var(--laranja-600)" }}
          >
            Contato
          </motion.li>
        </ul>
      </nav>
    </>
  );
}
