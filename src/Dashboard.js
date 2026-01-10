import React from 'react';

const Dashboard = () => {
  return (
    <section className="page-section">
      <div className="container" data-aos="fade-up">
        <h2 className="section__title">Daily <span className="highlight">Activity</span></h2>
        <div className="grid-3">
          <div className="stat-card">
            <i className="ri-fire-line"></i>
            <h3>750 kcal</h3>
            <p>Calories Burned</p>
          </div>
          <div className="stat-card">
            <i className="ri-footprint-line"></i>
            <h3>12,500</h3>
            <p>Steps Count</p>
          </div>
          <div className="stat-card">
            <i className="ri-time-line"></i>
            <h3>45 Min</h3>
            <p>Workout Time</p>
          </div>
        </div>
        
        <div className="progress-module">
          <h3>Weekly Goal Completion</h3>
          <div className="progress-bar-container">
            <div className="progress-fill" style={{width: '75%'}}>75%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;