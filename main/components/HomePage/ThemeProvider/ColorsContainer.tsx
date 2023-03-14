// Motion e as Vars
import { motion } from "framer-motion";
import { GlobalVars } from "../../motionVars";

// Mudar cores do tema
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

import brasil from "../../../assets/bandeira-brasil.png";
import estadosUnidos from "../../../assets/bandeira-estados-unidos.png";

import Image from "next/image";

export const ColorsContainer = () => {
  // Mudar tema
  const {
    theme,
    setYellow,
    setGreen,
    setOrange,
    setBlue,
    setRed,
    lang,
    setLangBR,
    setLangEN,
  } = useContext(ThemeContext);

  // Funções para verificar qual tema ativo
  function OrangeActive() {
    if (theme.hexadecimal === "#EA580C") {
      return "2px solid white";
    } else {
      return "none";
    }
  }

  function YellowActive() {
    if (theme.hexadecimal === "#EB9B17") {
      return "2px solid white";
    } else {
      return "none";
    }
  }

  function GreenActive() {
    if (theme.hexadecimal === "#189E4D") {
      return "2px solid white";
    } else {
      return "none";
    }
  }

  function BlueActive() {
    if (theme.hexadecimal === "#2389EB") {
      return "2px solid white";
    } else {
      return "none";
    }
  }

  function RedActive() {
    if (theme.hexadecimal === "#EB0E00") {
      return "2px solid white";
    } else {
      return "none";
    }
  }

  return (
    <motion.div
      variants={GlobalVars}
      initial="elementoYFora"
      animate="elementoYEmTela"
      className="h-auto bg-black p-2 rounded-full flex flex-col gap-4 fixed  items-center bottom-1/2 left-2"
    >
      <div>
        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY2"
          className="w-[1.8rem] h-auto"
        >
          <Image
            src={lang === "pt-BR" ? brasil : estadosUnidos}
            onClick={lang === "pt-BR" ? setLangEN : setLangBR}
            width={100}
            height={100}
            alt="brasil"
            className="w-auto h-auto cursor-pointer"
          />
        </motion.div>
      </div>

      <div className="flex flex-col gap-3 items-center justify-between">
        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY4"
          className="w-5 h-5 bg-[#EB9B17] rounded-full cursor-pointer"
          style={{ border: YellowActive() }}
          onClick={setYellow}
        ></motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY6"
          className="w-5 h-5 bg-[#189E4D] rounded-full cursor-pointer"
          style={{ border: GreenActive() }}
          onClick={setGreen}
        ></motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY6"
          className="w-5 h-5 bg-[#EA580C] rounded-full cursor-pointer"
          style={{ border: OrangeActive() }}
          onClick={setOrange}
        ></motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY8"
          className="w-5 h-5 bg-[#2389EB] rounded-full cursor-pointer"
          style={{ border: BlueActive() }}
          onClick={setBlue}
        ></motion.div>

        <motion.div
          variants={GlobalVars}
          initial="elementoYFora"
          animate="delayY10"
          className="w-5 h-5 bg-[#EB0E00] rounded-full cursor-pointer"
          style={{ border: RedActive() }}
          onClick={setRed}
        ></motion.div>
      </div>
    </motion.div>
  );
};
