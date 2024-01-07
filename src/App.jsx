import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MapPage from "./MapPage/MapPage";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
