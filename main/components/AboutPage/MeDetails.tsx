// Componentes
import { MeDetailsBanner } from "./MeDetailsBanner";
import { MeDetailsPanel } from "./MeDetailsPanel";

import Image from "next/image";
import background from "../../assets/background-main-page.jpg";

export function MeDetails() {
  return (
    <div className="max-[699px]:w-96 bg-cover w-screen h-fit flex flex-col justify-between items-center ">
      <MeDetailsBanner />

      <MeDetailsPanel />

      <Image
            className="w-full h-[76rem] absolute top-15 right-1 opacity-40"
            src={background}
            placeholder="blur" 
            alt="imagem de fundo"
            style={{
              objectFit: "cover",
            }}
          />
    </div>
  );
}
