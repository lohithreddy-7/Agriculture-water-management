import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import CropAnalysis from "./pages/CropAnalysis";
import DamMonitor from "./pages/DamMonitor";
import WaterSavingTips from "./pages/WaterSavingTips";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="analyze" element={<CropAnalysis />} />
          <Route path="water-saving-tips" element={<WaterSavingTips />} />
          <Route path="monitor" element={<DamMonitor />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
