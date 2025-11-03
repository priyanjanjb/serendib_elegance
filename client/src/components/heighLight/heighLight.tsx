import React, { useRef } from 'react'

// ✅ Import all 9 images
import spices from '../../assets/image/spices.jpg'
import tealeaf from '../../assets/image/teaLeaf.jpg'
import pagoda from '../../assets/image/pagoda.jpg'
import dalada from '../../assets/image/daladaPerahera.jpg'
import seegir from '../../assets/image/seegiriya.jpg'
import hikkdu from '../../assets/image/hikkadu.png'
import waterfall from '../../assets/image/waterfall.jpg'
import touris from '../../assets/image/tuarist.jpg'
import bath from '../../assets/image/bath.jpg'

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
  ]

  const scrollRef = useRef<HTMLDivElement | null>(null)

  // ✅ Type direction as a union of literal strings
  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollRef
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full h-[450px] bg-white flex justify-center items-center overflow-hidden">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-3 z-10 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow-md hidden md:block transition"
      >
        ◀
      </button>

      {/* Scrollable Image Row */}
      <div
        ref={scrollRef}
        className="flex w-full h-full overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
      >
        {images.map((img, index) => (
      <div
    key={index}
    className="max-w-[200px] min-w-[150px] md:min-w-[250px] h-full overflow-hidden transform -skew-x-6 flex-shrink-0"
  >
    <img
      src={img}
      alt={`slide-${index}`}
      className="w-full h-full object-cover transform skew-x-6"
    />
  </div>
))}

      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-3 z-10 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow-md hidden md:block transition"
      >
        ▶
      </button>

      {/* Overlay Button */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <button className="bg-orange-200/90 hover:bg-orange-400 text-red-800 font-semibold px-6 py-2 rounded-full text-lg shadow-md transition pointer-events-auto">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default HeighLight
