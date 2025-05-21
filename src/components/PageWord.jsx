import { useToogle } from "../context/ToogleContext";
import { useWord } from "../context/WordContext";
import LeftSection from "./LeftSection";
import Modal from "./Modal";
import ProgressBar from "./ProgressBar";
import RightSection from "./RightSection";
import Word from "./Word";

export default function PageWord({ children }) {
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
      <LeftSection />
      <RightSection />
      <Word />
      <ProgressBar />
      <Modal />
    </section>
  );
}
