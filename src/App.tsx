import { Routes, Route } from "react-router-dom";
import React from 'react';

import './App.css';
import { Layout } from "./components/layout/layout";
import { Games } from "./pages/games/Games";
import { Teams } from "./pages/teams/Teams";
import { Nothing } from "./pages/Nothing";
import { Boltadeildin } from "./pages/boltaland/Boltaland";
import { SoloGame } from "./components/detail/sologame";
import { Umsjon } from "./components/detail/umsjon";


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Boltadeildin />} />
          <Route path="teams" element={<Teams />} />
          <Route path="games" element={<Games />} />
          <Route path='sologame' element={<SoloGame/>} />
          <Route path='umsjon' element={<Umsjon/>} />
          <Route path="*" element={<Nothing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
