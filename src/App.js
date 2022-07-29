import { Routes, Route } from "react-router-dom";
import FlowOne from "./components/Flows/FlowOne";
import FlowTwo from "./components/Flows/FlowTwo";
import FlowThree from "./components/Flows/FlowThree";
import FlowFour from "./components/Flows/FlowFour";
import StepCount from "./components/StepCount/StepCount";

function App() {
  return (
    <div className="App">
      <StepCount />
      <Routes>
        <Route path="/" element={<FlowOne />} />
        <Route path="/stepTwo" element={<FlowTwo />} />
        <Route path="/stepThree" element={<FlowThree />} />
        <Route path="/stepFour" element={<FlowFour />} />
      </Routes>
    </div>
  );
}

export default App;
