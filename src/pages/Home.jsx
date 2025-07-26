import Layout from "../components/Layout";
import Modal from "../components/Modal";
import Word from "../components/Word";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import ProgressBar from "../components/ProgressBar";
import useWordStore from "../stores/useWordStore";
import useToggleStore from "../stores/useToggleStore";

export default function Home() {
  const isOpenTimer = useToggleStore((s) => s.isOpenTimer);
  const changeCurrent = useWordStore((s) => s.changeCurrent);

  function handleClick() {
    if (isOpenTimer) return;
    changeCurrent();
  }

  return (
    <Layout onClick={handleClick} showToggle>
      <LeftSection />
      <RightSection />
      <Word />
      <ProgressBar />
      <Modal />
    </Layout>
  );
}
