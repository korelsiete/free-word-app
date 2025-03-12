import "./App.css";
import Modal from "./components/Modal";
import PageFace from "./components/PageFace";
import RightSection from "./components/RightSection";
import Word from "./components/Word";

function App() {
  return (
    <main>
      <PageFace>
        <RightSection />
        <Word />
        <Modal />
      </PageFace>
    </main>
  );
}

export default App;
