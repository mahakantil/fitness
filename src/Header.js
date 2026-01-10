import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ELITE<span>FIT</span></div>
      <ul className="nav__list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/nutrition">Nutrition</Link></li>
        <li><Link to="/bmi">BMI</Link></li>
      </ul>
      <button className="nav__btn">Join Now</button>
    </header>
  );
};

export default Header;