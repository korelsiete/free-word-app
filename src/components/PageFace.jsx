import { useWord } from "../context/WordContext";

export default function PageFace({ children }) {
  const { getWord } = useWord();
  return (
    <section
      className="w-full h-screen flex flex-col items-center justify-center p-3"
      onClick={getWord}
    >
      {children}
    </section>
  );
}
