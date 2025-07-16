import Home from "./pages/Home";
import Test from "./pages/Test";
import Groups from "./pages/Groups";
import { Route, Routes } from "react-router";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/groups" element={<Groups />} />
    </Routes>
  );
}

export default App;
