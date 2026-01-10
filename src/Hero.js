import React from 'react';

const Hero = ({ onStartTrial }) => {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <div className="container" data-aos="fade-right">
        <h2 className="hero__subtitle">TRANSFORM YOUR LIFE</h2>
        <h1 className="hero__title">PUSH BEYOND <span className="highlight">LIMITS</span></h1>
        <p className="hero__desc">Premium fitness experience with world-class trainers.</p>
        <div className="hero__btns">
          <button className="btn-primary" onClick={onStartTrial}>
            START FREE TRIAL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;