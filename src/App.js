import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './Header';
import Hero from './Hero';
import Pricing from './Pricing';
import TrialModal from './TrialModal';
import Dashboard from './Dashboard';
import Nutrition from './Nutrition';
import BmiCalculator from './BmiCalculator';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header />
        
        {/* The Modal is placed here so it can appear over any page */}
        <TrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <Routes>
          <Route path="/" element={
            <>
              <Hero onStartTrial={() => setIsModalOpen(true)} />
              <Pricing />
            </>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/bmi" element={<BmiCalculator />} />
        </Routes>
        
        <footer className="footer">©️ 2026 ELITEFIT. Powering Your Progress.</footer>
      </div>
    </Router>
  );
}

export default App;