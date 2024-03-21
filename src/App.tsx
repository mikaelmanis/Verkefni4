import { Routes, Route } from "react-router-dom";
import React from 'react';

import './App.css';
import { Layout } from "./components/layout/layout";
import { Games } from "./pages/Games";
import { Teams } from "./pages/Teams";
import { Nothing } from "./pages/Nothing";
import { Boltadeildin } from "./pages/Boltaland";


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Boltadeildin />} />
          <Route path="teams" element={<Teams />} />
          <Route path="games" element={<Games />} />
          <Route path="*" element={<Nothing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
