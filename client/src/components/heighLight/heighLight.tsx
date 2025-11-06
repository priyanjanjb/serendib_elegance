import { useRef } from 'react';
import '../../assets/styleSheet/style.css';

import spices from '../../assets/image/spices.jpg';
import tealeaf from '../../assets/image/teaLeaf.jpg';
import pagoda from '../../assets/image/pagoda.jpg';
import dalada from '../../assets/image/daladaPerahera.jpg';
import seegir from '../../assets/image/seegiriya.jpg';
import hikkdu from '../../assets/image/hikkadu.png';
import waterfall from '../../assets/image/waterfall.jpg';
import touris from '../../assets/image/tuarist.jpg';
import bath from '../../assets/image/bath.jpg';

function HeighLight() {
  const images = [
    spices,
    tealeaf,
    pagoda,
    dalada,
    seegir,
    hikkdu,
    waterfall,
    touris,
    bath,
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="highlight-container">
      {/* Left Scroll Button */}
      <button onClick={() => scroll('left')} className="scroll-btn scroll-btn-left">
        &#10094;
      </button>

      {/* Scrollable Image Row */}
      <div ref={scrollRef} className="scroll-row">
        {images.map((img, index) => (
          <div key={index} className="image-wrapper">
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button onClick={() => scroll('right')} className="scroll-btn scroll-btn-right">
        &#10095;
      </button>

    </div>
  );
}

export default HeighLight;
