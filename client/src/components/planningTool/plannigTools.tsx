import '../../assets/styleSheet/style.css'
const cards = [
  { title: "Best Things To Do" },
  { title: "Best Place To Visit" },
  { title: "Best Time To Visit" },
  { title: "Things To Know" },
  { title: "Transportation" },
  { title: "Visa Requirements" },
  { title: "Things To Know" },
  { title: "Transportation" },
  { title: "Visa Requirements" },
];

const PlanningTools = () => {
  return (
    <section className="planning-section">
      <div className="overlay">
        <h2 className="planning-title">Planning Tools</h2>

        <div className="planning-grid">
          {cards.map((card, index) => (
            <div key={index} className="planning-card">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">
                Sri Lanka offers a variety of experiences from ancient cities and
                beautiful beaches to lush tea estates and cool highlands. The best
                places to visit depend on what you want to see—from the cultural
                triangle to the scenic Yala National Park.
              </p>
              <div className="card-btn"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanningTools;
