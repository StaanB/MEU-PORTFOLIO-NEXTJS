// Import Motion
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

interface ProgressProps {
  percent: number;
  title: string;
}

export function ProgressBar({ percent, title }: ProgressProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <p className="relative top-4 font-bold text-md">{title}</p>
      <div className="w-auto bg-[#111111] rounded-full h-4">
        <div
          className="h-4 rounded-full flex justify-end"
          style={{
            width: `${percent * 0.28}rem`,
            backgroundColor: theme?.hexadecimal,
          }}
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="w-auto p-3 rounded-full font-bold self-center"
            style={{
              backgroundColor: theme?.hexadecimal,
              boxShadow: theme?.shadow,
            }}
          >
            {percent}%
          </motion.span>
        </div>
      </div>
    </>
  );
}
