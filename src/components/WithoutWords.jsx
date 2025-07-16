import useToggleStore from "../stores/useToggleStore";
import { Button } from "./Button";

export default function WithoutWords() {
  const openAdd = useToggleStore((state) => state.openAdd);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-lg font-bold text-center leading-[22px]">
        Aún no has agregado ninguna palabra
      </p>
      <Button onClick={openAdd}>Agregar +</Button>
    </div>
  );
}
