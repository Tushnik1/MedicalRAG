import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Diagnosis from "./pages/Diagnosis";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diagnosis" element={<Diagnosis />} />
    </Routes>
  );
}

export default App;