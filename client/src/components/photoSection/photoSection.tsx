import  { useState } from "react";
import '../../assets/styleSheet/style.css'
import rafting from '../../assets/image/rafting.jpg';
import ab from '../../assets/image/ab.jpg';
import spices from '../../assets/image/spices.jpg';
function PhotoSection() {
  const images = [
    rafting,
    ab,
    spices,
  ];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (index < images.length - 1) setIndex(index + 1);
  };

  const prevImage = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="photo-section">
      {/* Image track */}
      <div
        className="photo-section__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="photo-section__slide"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className={`photo-section__arrow photo-section__arrow--left ${
          index === 0 ? "photo-section__hidden" : "photo-section__visible"
        }`}
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className={`photo-section__arrow photo-section__arrow--right ${
          index === images.length - 1
            ? "photo-section__hidden"
            : "photo-section__visible"
        }`}
      >
        &#10095;
      </button>
    </div>
  );
}

export default PhotoSection;
