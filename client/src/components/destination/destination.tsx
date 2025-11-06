import "../../assets/styleSheet/style.css";
import leopard from "../../assets/image/leopard.jpg";
import nineArch from "../../assets/image/nineArch.jpg";
import surf from "../../assets/image/surf.jpg";
import temple from "../../assets/image/daladaPerahera.jpg";
import sigiriya from "../../assets/image/seegiriya.jpg";
import statue from "../../assets/image/statue.jpg";

const DestinationSection = () => {
  const destinations = [
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
  ];

  return (
    <section className="destination-section">
      <h2 className="destination-title">Destination</h2>
      <div className="destination-scroll">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="destination-box"
          >
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-1">{dest.title}</h3>
                <p className="text-sm mb-2">{dest.duration}</p>
                <h4 className="font-semibold mb-1">Tour Highlights:</h4>
                <ul className="list-disc list-inside text-sm mb-3">
                  {dest.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
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
