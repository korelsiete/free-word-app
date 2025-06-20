import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import ProgressBar from "../components/ProgressBar";
import Modal from "../components/Modal";
import Word from "../components/Word";
import { useWord } from "../context/WordContext";
import { useToogle } from "../context/ToogleContext";

export default function Home() {
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
