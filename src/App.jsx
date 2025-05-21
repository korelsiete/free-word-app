import "./App.css";
import PageGroup from "./components/PageGroup";
import PageWord from "./components/PageWord";
import { useToogle } from "./context/ToogleContext";

function App() {
  const { isOpenGroup } = useToogle();

  return <main>{isOpenGroup ? <PageGroup /> : <PageWord />}</main>;
}

export default App;
