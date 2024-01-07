import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MapPage from "./pages/MapPage/MapPage"
import HomePage from "./pages/HomePage/HomePage"

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
