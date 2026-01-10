import React from 'react';

const Nutrition = () => {
  const meals = [
    { title: 'Breakfast', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=500', cals: '450' },
    { title: 'Lunch', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500', cals: '650' },
    { title: 'Dinner', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=500', cals: '550' }
  ];

  return (
    <section className="page-section">
      <div className="container">
        <h2 className="section__title">Nutrition <span className="highlight">Tracker</span></h2>
        <div className="grid-3">
          {meals.map((meal, idx) => (
            <div key={idx} className="meal-card" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <img src={meal.img} alt={meal.title} className="meal-img" />
              <div className="meal-info">
                <h4>{meal.title}</h4>
                <p className="highlight">{meal.cals} Calories</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nutrition;