import { motion } from "framer-motion";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ProgressBar } from "./ProgressBar";

export function SkillsSection() {
  return (
    <>
      <div className="w-screen h-auto flex flex-col justify-center items-center bg-zinc-800">
        <motion.div className="w-full flex flex-col justify-center items-center mb-20">
          <BsFillPersonLinesFill className="w-8 h-8 mt-10 mb-3 text-orange-600" />
          <motion.h2
            whileInView={{ scale: [1, 1.1, 1, 1.1, 1] }}
            transition={{ duration: 5 }}
            className="mb-20 text-4xl font-bold underline decoration-orange-600"
          >
            Habilidades
          </motion.h2>

          <div className="w-4/6 h-auto flex items-center justify-evenly gap-96">
            <div className="w-full flex flex-col gap-5">
              <p className="text-3xl font-bold">Habilidades técnicas</p>

              <ProgressBar title="Javascript" percent={85} />

              <ProgressBar title="HTML e CSS" percent={100} />

              <ProgressBar title="React" percent={80} />

              <ProgressBar title="Excel" percent={70} />

              <ProgressBar title="Photoshop" percent={55} />
            </div>

            <div className="w-full flex flex-col gap-5">
              <p className="text-3xl font-bold">Habilidades pessoais</p>

              <ProgressBar title="Comunicação" percent={90} />

              <ProgressBar title="Trabalho em equipe" percent={90} />

              <ProgressBar title="Confiabilidade" percent={80} />

              <ProgressBar title="Criatividade" percent={70} />

              <ProgressBar title="Flexibilidade" percent={60} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
