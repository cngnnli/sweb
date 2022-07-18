import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Addproduct from "./pages/Addproduct";

import { ScoreProvider } from "./contexts/Context";

function App() {
  return (
    <ScoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<Addproduct />} />
        </Routes>
      </BrowserRouter>
    </ScoreProvider>
  );
}

export default App;
