import "./App.css";
import React from "react";
import Home from "./Home";
import Escene3d from "./components3D/Escene3d";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { motion as m, AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <m.main className="sticky flex flex-col">      
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Escene3d/>}/>     
        </Routes>
      </AnimatePresence>
    </m.main>
  );
}

export default App;