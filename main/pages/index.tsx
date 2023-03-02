import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stanley</title>
      </Head>
      <Image src=""></Image>
      <motion.div className="w-screen h-fit flex justify-center items-center">
        <motion.div className="w-96 h-auto bg-zinc-800 flex flex-col justify-center items-center mt-40">
          <h1 className="text-4xl font-bold tracking-wideler mt-40">Stanley Brenner</h1>
          <p className="text-sm mb-10">Desenvolvedor Front-End & Designer</p>
          <ul className="flex gap-5 mb-10">
            <li>Github</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>whatsapp</li>
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
}
