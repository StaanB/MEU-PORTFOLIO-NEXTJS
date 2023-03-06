import { motion } from "framer-motion";

interface ProgressProps {
  percent: number;
  title: string;
}

export function ProgressBar({ percent, title }: ProgressProps) {

  return (
    <>
      <p className="relative top-4 font-bold text-md">{title}</p>
      <div className="w-auto bg-[#111111] rounded-full h-4">
        <div
          className="bg-orange-600 h-4 rounded-full flex justify-end"
          style={{ width: `${percent * 4.5}px` }}
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="w-auto p-3 bg-orange-600 rounded-full shadow-[0px_0px_30px_15px_rgba(234,88,12,0.3)] font-bold self-center"
          >
            {percent}%
          </motion.span>
        </div>
      </div>
    </>
  );
}
