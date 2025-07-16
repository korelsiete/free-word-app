import Modal from "../components/Modal";
import Word from "../components/Word";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import ProgressBar from "../components/ProgressBar";
import useWordStore from "../stores/useWordStore";
import useToggleStore from "../stores/useToggleStore";

export default function Home() {
  const isOpenTimer = useToggleStore((state) => state.isOpenTimer);
  const changeCurrent = useWordStore((state) => state.changeCurrent);

  function handleClick() {
    if (isOpenTimer) return;
    changeCurrent();
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
