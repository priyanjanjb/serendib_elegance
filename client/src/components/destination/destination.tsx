import { useRef } from 'react';

import "../../assets/styleSheet/style.css";
import leopard from "../../assets/image/leopard.jpg";
import nineArch from "../../assets/image/nineArch.jpg";
import surf from "../../assets/image/surf.jpg";
import temple from "../../assets/image/daladaPerahera.jpg";
import sigiriya from "../../assets/image/seegiriya.jpg";
import statue from "../../assets/image/statue.jpg";

const DestinationSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
  const { current } = scrollRef;
  if (current) {
    const scrollAmount = direction === 'left' ? -1400 : 1400;
    current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
  };

  const destinations = [
    {
      image: temple,
      title: "Sri Lanka Highlights Express",
      duration: "3 Nights / 4 Days",
      highlights: [
        "Explore the Temple of the Tooth Relic in Kandy.",
        "Ride the scenic train through Hill Country.",
        "Hike to Little Adam’s Peak or Nine Arch Bridge in Ella.",
        "Relax on the pristine southern beaches.",
      ],
    },
    {
      image: nineArch,
      title: "Hill Country & Tea Trails",
      duration: "6 Nights / 7 Days",
      highlights: [
        "Visit a working tea factory and plantation.",
        "Explore the colonial town of Nuwara Eliya.",
        "Enjoy breathtaking views and scenic hikes.",
      ],
    },
    {
      image: surf,
      title: "East Coast Sun & Surf",
      duration: "8 Nights / 9 Days",
      highlights: [
        "Surfing lessons in Arugam Bay (seasonal).",
        "Snorkeling at Pigeon Island National Park.",
        "Relaxing on the beaches of Pasikudah.",
      ],
    },
    
    {
      image: leopard,
      title: "Sri Lanka Wildlife Explorer",
      duration: "9 Nights / 10 Days",
      highlights: [
        "Dolphin and whale watching in Kalpitiya (Dec–Apr).",
        "Leopard and elephant safaris in Wilpattu National Park.",
        "Trekking across Horton Plains National Park.",
        "Birdwatching and jungle walk in Sinharaja Rainforest.",
        "Udawalawe Safari to see elephants in their natural habitat.",
      ],
    },
    {
      image: statue,
      title: "Sri Lanka Cultural Treasures Tour",
      duration: "10 Nights / 11 Days",
      highlights: [
        "Climb Sigiriya Rock Fortress.",
        "Witness Dumbara Rata weaving and Kandyan dance.",
        "Temple of the Tooth Relic in Kandy.",
        "Journey through Nuwara Eliya’s tea country.",
        "Train ride to Ella and hike Little Adam’s Peak.",
        "Explore the ancient city of Anuradhapura.",
      ],
    },
    {
      image: sigiriya,
      title: "Sri Lanka Adventure Discovery",
      duration: "14 Nights / 15 Days - Winter Tour",
      highlights: [
        "Discover Sigiriya Rock Fortress and explore village life.",
        "Trek through Meemure in the Knuckles Range.",
        "Ride the scenic train to Ella and hike Little Adam’s Peak.",
        "Experience white-water rafting in Kitulgala.",
        "Safari in Yala for leopards and elephants.",
        "Unwind on the southern beaches.",
      ],
    },
    
  ];

  return (
    <div className="destination-section">
      <div className="destination-wrapper">
        <h2 className="destination-title">Destination</h2>
        
        <div className="destination-scroll" ref={scrollRef}>
          {/* Left Scroll Button */}
          <div className='destination-scroll-btn'>
            <button onClick={() => scroll('left')} className="scroll-btn scroll-btn-left">
              &#10094;
            </button>
          </div>
          {destinations.map((dest, index) => (
            <div key={index} className="destination-box">
              <img
              className="destination-image"
              src={dest.image} alt={dest.title}/>

              <div className="destination-textArea">
                <div className='text'>
                  <h3 className="destination-caption">{dest.title}</h3>
                  <p className="destination-duration">{dest.duration}</p>
                  <h4 className="destination-subTitle">Tour Highlights:</h4>
                  <ul className="destination-description">
                    {dest.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="buttonSection">
                  <button className="more-details-button">
                    More Details
                  </button>
              </div>

            </div>
          ))}
          <div className='destination-scroll-btn'>
            {/* Right Scroll Button */}
            <button onClick={() => scroll('right')} className="scroll-btn scroll-btn-right">
              &#10095;
            </button>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default DestinationSection;
