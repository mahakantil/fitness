import React from 'react';

const Pricing = () => {
  const plans = [
    { 
      name: 'Basic', 
      price: '1,499', 
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80',
      about: 'Ideal for those who need high-quality essentials. Get full access to cardio and strength zones during standard hours.',
      features: ['General Gym Access', 'Locker Room', 'Basic Support'],
      featured: false 
    },
    { 
      name: 'Elite', 
      price: '2,999', 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80',
      about: 'Our most popular plan for serious fitness enthusiasts. Includes 24/7 access and expert recovery facilities.',
      features: ['24/7 VIP Access', 'Personal Trainer', 'Sauna & Steam'], 
      featured: true 
    },
    { 
      name: 'Pro', 
      price: '4,999', 
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=400&q=80',
      about: 'The ultimate wellness experience. Personalized nutrition and monthly massage therapy for total transformation.',
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
            
            <div className="plan__img-box">
              <img src={plan.image} alt={plan.name} className="plan__image" />
            </div>

            <h3>{plan.name}</h3>
            
            <p className="plan__about">{plan.about}</p>
            
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