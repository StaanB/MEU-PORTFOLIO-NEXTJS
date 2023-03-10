// Componentes
import { MeDetailsBanner } from "./MeDetailsBanner";
import { MeDetailsPanel } from "./MeDetailsPanel";

export function MeDetails() {
  return (
    <div className="background bg-cover w-screen h-fit flex flex-col justify-between items-center ">
      <MeDetailsBanner />

      <MeDetailsPanel />
    </div>
  );
}
