import React, { useState } from 'react';

const BmiCalculator = () => {
  const [bmi, setBmi] = useState(null);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [angle, setAngle] = useState(-90); 

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

    
      let newAngle = ((bmiValue - 15) / (40 - 15)) * 180 - 90;
      setAngle(Math.min(Math.max(newAngle, -90), 90)); 
    }
  };

  return (
    <section className="bmi-section page-section">
      <div className="bmi__container">
        <div className="bmi__content">
          <h2>Check Your <span className="highlight">BMI</span></h2>
          <form onSubmit={calculateBMI} className="bmi__form-row">
            <input 
              type="number" 
              placeholder="Weight (kg)" 
              onChange={(e) => setWeight(e.target.value)} 
            />
            <input 
              type="number" 
              placeholder="Height (cm)" 
              onChange={(e) => setHeight(e.target.value)} 
            />
            <button className="btn-primary">CALCULATE</button>
          </form>

          {bmi && (
            <div className="bmi__meter-wrapper" data-aos="fade-up">
              <div className="bmi__meter-chart">
                <div className="meter-bg"></div>
                <div className="meter-needle" style={{ transform: `rotate(${angle}deg)` }}></div>
                <div className="meter-center"></div>
              </div>
              <div className="result-text">
                <h3>BMI = {bmi}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;