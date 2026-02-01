import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const mealData = {
  breakfast: {
    title: "Power Breakfast",
    summary: "High-protein avocado toast with poached eggs and chili flakes.",
    calories: "450 kcal",
    ingredients: ["2 Eggs", "Whole Grain Bread", "1/2 Avocado", "Chili Flakes"]
  },
  lunch: {
    title: "Healthy Buddha Bowl",
    summary: "A nutrient-dense bowl with quinoa, roasted chickpeas, and fresh greens.",
    calories: "650 kcal",
    ingredients: ["Quinoa", "Chickpeas", "Spinach", "Tahini Dressing"]
  },
  dinner: {
    title: "Grilled Salmon",
    summary: "Heart-healthy grilled salmon served with asparagus and lemon.",
    calories: "550 kcal",
    ingredients: ["Salmon Fillet", "Asparagus", "Lemon Juice", "Olive Oil"]
  }
};

const MealDetail = () => {
  const { mealId } = useParams();
  const navigate = useNavigate();
  const meal = mealData[mealId];

  if (!meal) return <div className="page-section">Meal not found</div>;

  return (
    <div className="meal-detail-page page-section" data-aos="fade-up">
      <button onClick={() => navigate('/nutrition')} className="btn-outline">
        <i className="ri-arrow-left-line"></i> Back
      </button>
      <h2 className="highlight">{meal.title}</h2>
      <div className="meal-summary-card">
        <p className="description">{meal.summary}</p>
        <h4>Ingredients:</h4>
        <ul>
          {meal.ingredients.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <div className="calories-badge">{meal.calories}</div>
      </div>
    </div>
  );
};

export default MealDetail;