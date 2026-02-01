import React, { useState } from 'react';
import WaterTracker from './WaterTracker';

const Dashboard = () => {
  const [workoutType, setWorkoutType] = useState('Running');
  const [duration, setDuration] = useState('');

  const handleLogWorkout = (e) => {
    e.preventDefault();
    alert(`Aapne ${duration} minute ${workoutType} successfully log kiya!`);
  };

  return (
    <section className="page-section dashboard-section">
      <div className="container" data-aos="fade-up">
        <h2 className="section__title center">YOUR FITNESS <span className="highlight">COMMAND CENTER</span></h2>
        
     
        <div className="dashboard-grid-main">
          <div className="workout-logger-card stat-card">
            <h3>Log <span className="highlight">Workout</span></h3>
            <form onSubmit={handleLogWorkout}>
              <select onChange={(e) => setWorkoutType(e.target.value)}>
                <option>Running</option>
                <option>Weightlifting</option>
                <option>Cycling</option>
                <option>Yoga</option>
              </select>
              <input 
                type="number" 
                placeholder="Minutes" 
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">SAVE ACTIVITY</button>
            </form>
          </div>

          <div className="stats-mini-grid">
            <div className="stat-card mini">
              <i className="ri-fire-line highlight"></i>
              <h3>750 kcal</h3>
              <p>Burned Today</p>
            </div>
            <div className="stat-card mini">
              <i className="ri-footprint-line highlight"></i>
              <h3>12,500</h3>
              <p>Total Steps</p>
            </div>
          </div>
        </div>

        <div className="dashboard-flex-row">
          <div className="hydration-module">
            <WaterTracker />
          </div>
          
          <div className="health-tips-module stat-card">
            <h3>Elite <span className="highlight">Health Tips</span></h3>
            <ul className="tips-list">
              <li><i className="ri-check-line"></i> Workout ke baad 20g protein zaroor lein.</li>
              <li><i className="ri-check-line"></i> Raat ko kam se kam 7-8 ghante ki neend lein.</li>
              <li><i className="ri-check-line"></i> Har 1 ghante mein 5 minute walk zaroor karein.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;