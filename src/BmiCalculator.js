import React, { useState } from 'react';

const BmiCalculator = () => {
  const [bmi, setBmi] = useState(null);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    setBmi((weight / (heightInMeters * heightInMeters)).toFixed(1));
  };

  return (
    <section className="bmi-section" data-aos="zoom-in">
      <div className="bmi__container">
        <div className="bmi__content">
          <h2>Check Your <span className="highlight">BMI</span></h2>
          <form onSubmit={calculateBMI} className="bmi__form">
            <input type="number" placeholder="Weight (kg)" onChange={(e)=>setWeight(e.target.value)} />
            <input type="number" placeholder="Height (cm)" onChange={(e)=>setHeight(e.target.value)} />
            <button className="btn-primary">Calculate</button>
          </form>
          {bmi && <h3 className="result">Result: {bmi}</h3>}
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;