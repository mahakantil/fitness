import React from 'react';
import { Link } from 'react-router-dom'; 

const Nutrition = () => {
  const meals = [
    { id: 'breakfast', name: 'Breakfast', calories: '450', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80' },
    { id: 'lunch', name: 'Lunch', calories: '650', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80' },
    { id: 'dinner', name: 'Dinner', calories: '550', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <div className="nutrition-container page-section">
      <h2 className="section__title">Nutrition <span className="highlight">Tracker</span></h2>
      <div className="meal__grid">
        {meals.map((meal) => ( 
          <Link to={`/nutrition/${meal.id}`} key={meal.id} className="meal__card-link">
            <div className="meal__card" data-aos="zoom-in">
              <img src={meal.img} alt={meal.name} />
              <div className="meal__info">
                <h4>{meal.name}</h4>
                <p className="highlight">{meal.calories} Calories</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nutrition;