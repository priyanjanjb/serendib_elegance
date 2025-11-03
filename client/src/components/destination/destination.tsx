import React from "react";
import "../../assets/styleSheet/style.css";

const DestinationSection = () => {
  return (
    <section className="destination-section">
      <h2 className="destination-title">Destination</h2>
      <div className="destination-scroll">
        {[1, 2, 3, 4, 5, 6].map((box) => (
          <div key={box} className="destination-box">
            <p className="text-white font-semibold text-lg">Box {box}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationSection;
