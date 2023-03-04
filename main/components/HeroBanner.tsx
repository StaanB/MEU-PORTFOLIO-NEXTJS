// Motion e motion vars
import { motion } from "framer-motion";
import {
  h1MainContainer,
  mainContainer,
  pMainContainer,
  ulMainContainer,
} from "./motionVars";

// Next Link
import Link from "next/link";
// Icons
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export const HeroBanner = () => {
  return (
    <>
      <motion.div className="background bg-cover w-screen h-fit flex justify-center items-center">
        <motion.div
          variants={mainContainer}
          initial="oculto"
          animate="emTela"
          exit="exit"
          className="w-96 h-auto bg-zinc-800 flex flex-col justify-center items-center mt-40 mb-20 m-auto rounded-md"
        >
          <motion.div
            variants={mainContainer}
            whileHover={{ scale: 0.9 }}
            className="bg-eu bg-cover w-96 h-96 rounded-full relative bottom-10 border-solid border-8 border-orange-600 shadow-[0px_0px_60px_20px_rgba(234,88,12,0.3)]"
          ></motion.div>

          <motion.h1
            variants={h1MainContainer}
            whileTap={{ color: "#ea580c", letterSpacing: "2px" }}
            className="text-4xl font-bold tracking-wideler cursor-pointer"
          >
            Stanley Brenner
          </motion.h1>

          <motion.p variants={pMainContainer} className="text-sm mb-10">
            Desenvolvedor Front-End & Designer
          </motion.p>

          <motion.ul variants={ulMainContainer} className="flex gap-7 mb-10">
            <Link href="https://github.com/StaanB" target="_blank">
              <BsGithub className="w-6 h-6 hover:text-orange-600 hover:scale-125 ease-in duration-200 cursor-pointer" />
            </Link>

            <Link href="https://www.instagram.com/staanb/" target="_blank">
              <BsInstagram className="w-6 h-6 hover:text-pink-600 hover:scale-125 ease-in duration-200 cursor-pointer" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/stanley-brenner-213989184/"
              target="_blank"
            >
              <BsLinkedin className="w-6 h-6 hover:text-blue-600 hover:scale-125 ease-in duration-200 cursor-pointer" />
            </Link>

            <Link href="https://wa.me/+5571986895914" target="_blank">
              <BsWhatsapp className="w-6 h-6 hover:text-green-600 hover:scale-125 ease-in duration-200 cursor-pointer" />
            </Link>
          </motion.ul>
        </motion.div>
      </motion.div>
    </>
  );
};