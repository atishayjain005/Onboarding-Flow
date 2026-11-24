import { useEffect, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import FlowOne from "./components/Flows/FlowOne";
import FlowTwo from "./components/Flows/FlowTwo";
import FlowThree from "./components/Flows/FlowThree";
import FlowFour from "./components/Flows/FlowFour";
import StepCount from "./components/StepCount/StepCount";
import Logo from "./components/Logo/Logo";

function App() {
  const { pathname } = useLocation();
  const main = useRef(null);
  useEffect(() => { main.current?.focus(); }, [pathname]);
  return (
    <div className="App">
      <Logo />
      <StepCount />
      <main ref={main} tabIndex={-1}>
      <Routes>
        <Route path="/" element={<FlowOne />} />
        <Route path="/stepTwo" element={<FlowTwo />} />
        <Route path="/stepThree" element={<FlowThree />} />
        <Route path="/stepFour" element={<FlowFour />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
