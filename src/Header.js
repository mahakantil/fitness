import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        POWER<span>FIT</span>
      </div>

      <ul className="nav__list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/nutrition">Nutrition</Link></li>
        <li><Link to="/bmi">BMI</Link></li>
      </ul>

      <div className="nav__right">
        <div className="profile__wrapper">
          <img 
            src="https://img.icons8.com/bubbles/100/user-male-circle.png" 
            alt="User Profile" 
            className="user__avatar"
          />
          <div className="online__status"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;