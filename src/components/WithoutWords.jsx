import { useToogle } from "../context/ToogleContext";
import { PrimaryButton } from "./Button";

export default function WithoutWords() {
  const { openAdd } = useToogle();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-lg font-bold text-center leading-[22px]">
        Aún no has agregado ninguna palabra
      </p>
      <PrimaryButton onClick={openAdd}>Agregar +</PrimaryButton>
    </div>
  );
}
