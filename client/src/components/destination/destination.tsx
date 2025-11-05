import "../../assets/styleSheet/style.css";
import leopard from "../../assets/image/waterfall.jpg"
import nineArch from "../../assets/image/waterfall.jpg";
import surf from "../../assets/image/waterfall.jpg";
import temple from "../../assets/image/waterfall.jpg";
import sigiriya from "../../assets/image/waterfall.jpg";
import statue from "../../assets/image/waterfall.jpg";

const DestinationSection = () => {
  const destinations = [
    {
      image: leopard,
      title: "Sri Lanka Wildlife Explorer",
      duration: "9 Nights / 10 Days",
      highlights: [
        "Deep wildlife watching in Yala National Park",
        "Exploring the Sinharaja Rainforest",
        "Relaxing beaches and jungle walks in the Sinharaja habitat",
      ],
    },
    {
      image: nineArch,
      title: "Hill Country & Tea Trails",
      duration: "6 Nights / 7 Days",
      highlights: [
        "Train ride through misty hills of Ella",
        "Visit to tea plantations and factories",
        "Explore waterfalls and lush valleys",
      ],
    },
    {
      image: surf,
      title: "East Coast Sun & Surf",
      duration: "8 Nights / 9 Days",
      highlights: [
        "Surfing at Arugam Bay (seasonal)",
        "Relaxing on Pasikuda beach",
        "Exploring Batticaloa lagoon",
      ],
    },
    {
      image: temple,
      title: "Sri Lanka Highlights Express",
      duration: "3 Nights / 4 Days",
      highlights: [
        "Kandy Temple of the Tooth",
        "Cultural dance performance",
        "Visit the Royal Botanical Gardens",
      ],
    },
    {
      image: sigiriya,
      title: "Sri Lanka Adventure Discovery",
      duration: "14 Nights / 15 Days - Wildlife Tour",
      highlights: [
        "Climb the Sigiriya Rock Fortress",
        "Safari in Minneriya National Park",
        "Whale watching in Mirissa",
      ],
    },
    {
      image: statue,
      title: "Sri Lanka Cultural Treasures Tour",
      duration: "10 Nights / 11 Days",
      highlights: [
        "Ancient cities of Anuradhapura and Polonnaruwa",
        "Temple of the Tooth Relic",
        "Golden Temple of Dambulla",
      ],
    },
  ];

  return (
    <section className="destination-section">
      <h2 className="destination-title">Destination</h2>
      <div className="destination-scroll">
        {destinations.map((dest, index) => (
          <div key={index} className="destination-box">
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 text-white">
              <h3 className="text-xl font-semibold mb-1">{dest.title}</h3>
              <p className="text-sm mb-3">{dest.duration}</p>
              <h4 className="font-semibold mb-1">Tour Highlights:</h4>
              <ul className="list-disc list-inside text-sm mb-3">
                {dest.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationSection;
