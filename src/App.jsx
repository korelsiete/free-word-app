import "./App.css";
import LeftSection from "./components/LeftSection";
import Modal from "./components/Modal";
import PageFace from "./components/PageFace";
import ProgressBar from "./components/ProgressBar";
import RightSection from "./components/RightSection";
import Word from "./components/Word";

function App() {
  return (
    <main>
      <PageFace>
        <LeftSection />
        <RightSection />
        <Word />
        <ProgressBar />
        <Modal />
      </PageFace>
    </main>
  );
}

export default App;
