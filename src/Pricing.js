import React from 'react';

const Pricing = () => {
  const plans = [
    { 
      name: 'Basic', 
      price: '1,499', 
      features: ['General Gym Access', 'Locker Room', 'Basic Support'],
      featured: false 
    },
    { 
      name: 'Elite', 
      price: '2,999', 
      features: ['24/7 VIP Access', 'Personal Trainer', 'Sauna & Steam'], 
      featured: true 
    },
    { 
      name: 'Pro', 
      price: '4,999', 
      features: ['All Elite Benefits', 'Personalized Diet Plan', 'Monthly Massages'],
      featured: false 
    }
  ];

  return (
    <section className="pricing">
      <h2 className="section__title center" data-aos="fade-down">
        CHOOSE YOUR <span className="highlight">PLAN</span>
      </h2>
      <div className="pricing__wrapper">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`price__card ${plan.featured ? 'featured' : ''}`} 
            data-aos="flip-up"
          >
            {plan.featured && <div className="badge">BEST VALUE</div>}
            <h3>{plan.name}</h3>
            
            {/* Currency set to Rupees as requested */}
            <div className="price">₹{plan.price}<span>/mo</span></div>
            
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>
                  <i className="ri-checkbox-circle-fill"></i> {f}
                </li>
              ))}
            </ul>
<div className="btn__container">
  <button className={plan.featured ? 'btn-primary' : 'btn-outline'}>
    Get Started
  </button>
</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;