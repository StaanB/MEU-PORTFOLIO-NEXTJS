// Componentes
import { MeDetailsBanner } from "./MeDetailsBanner";
import { MeDetailsPanel } from "./MeDetailsPanel";

export function MeDetails() {
  return (
    <div className="max-[699px]:w-96 background bg-cover w-screen h-fit flex flex-col justify-between items-center ">
      <MeDetailsBanner />

      <MeDetailsPanel />
    </div>
  );
}
