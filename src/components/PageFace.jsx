import { useToogle } from "../context/ToogleContext";
import { useWord } from "../context/WordContext";

export default function PageFace({ children }) {
  const { isOpenTimer } = useToogle();
  const { getWord } = useWord();

  function handleClick(e) {
    if (isOpenTimer) return;
    getWord();
  }
  return (
    <section
      className="w-full h-screen flex flex-col items-center justify-center p-3"
      onClick={handleClick}
    >
      {children}
    </section>
  );
}
