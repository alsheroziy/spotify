import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Download from "./pages/download";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
      </Routes>
  );
}

export default App;
