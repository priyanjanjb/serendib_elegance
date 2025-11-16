import '../../assets/styleSheet/style.css'

const cards = [
  { 
    title: "Best Things To Do", 
    description: "Explore a variety of activities and attractions that Sri Lanka has to offer for every type of traveler." 
  },
  { 
    title: "Best Place To Visit", 
    description: "Discover top destinations and hidden gems across Sri Lanka that you shouldn't miss." 
  },
  { 
    title: "Best Time To Visit", 
    description: "Find out the ideal seasons and months to experience the best weather and events in Sri Lanka." 
  },
  { 
    title: "Things To Know", 
    description: "Get essential travel tips, cultural insights, and safety advice before you go." 
  },
  { 
    title: "Transportation", 
    description: "Find out about public transport, car rentals, and other ways to get around Sri Lanka." 
  },
  { 
    title: "Visa Requirements", 
    description: "Check visa rules, application procedures, and necessary documents for your travel." 
  },
  { 
    title: "Local Cuisine", 
    description: "Discover Sri Lanka's delicious food, from street snacks to traditional meals." 
  },
  { 
    title: "Accommodation", 
    description: "Learn about hotels, guesthouses, and other lodging options to suit every budget." 
  },
  { 
    title: "Cultural Etiquette", 
    description: "Understand local customs, traditions, and etiquette to respect while traveling." 
  },
];

const PlanningTools = () => {
  return (
    <div className="planning-section">
      <div className="overlay">
        <h2 className="planning-title">Planning Tools</h2>

        <div className="planning-grid">
          {cards.map((card, index) => (
            <div key={index} className="planning-card">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.description}</p>
              <div className="card-btn"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanningTools;
