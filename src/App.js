import "./App.css";
import Sorter from "./components/Sorter";

function App() {
  return (
    <div className="flex flex-col items-center justify-center  h-screen">
      <h1 className="font-bold text-2xl">Bubble sorting visualizer</h1>
      <Sorter />
    </div>
  );
}

export default App;
