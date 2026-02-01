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
import MealDetail from './MealDetail';
import Gallery from './Gallery';
import Footer from './Footer'; 

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <TrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <Routes>
          <Route path="/" element={
            <>
              <Hero onStartTrial={() => setIsModalOpen(true)} />
              <Pricing onGetStarted={() => setIsModalOpen(true)} />
              <Gallery /> 
            </>
          } />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/bmi" element={<BmiCalculator />} />
          <Route path="/nutrition/:mealId" element={<MealDetail />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;