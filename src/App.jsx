import Home from "./pages/Home";
import Groups from "./pages/Groups";
import { Route, Routes } from "react-router";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/groups" element={<Groups />} />
    </Routes>
  );
}

export default App;
