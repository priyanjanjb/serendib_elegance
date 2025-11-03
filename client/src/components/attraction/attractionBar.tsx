import React, { useState } from 'react'
import tmpkand from '../../assets/image/43422283775_3afeca834f_b.jpg'
import ningarch from '../../assets/image/nineArch.jpg'
import seegiri from '../../assets/image/seegiriya.jpg'
import '../../assets/styleSheet/style.css'

function AttractionBar() {
  const [showAll, setShowAll] = useState(false)

  // ✅ Each item has both image and title
  const attractions = [
    { img: tmpkand, title: 'ATTRACTION IN KANDY TEMPLE OF TOOTH' },
    { img: ningarch, title: 'ATTRACTION IN ELLA NINE ARCH BRIDGE' },
    { img: seegiri, title: 'ATTRACTION IN MATALE SIGIRIYA' },
    { img: seegiri, title: 'Dambulla Cave Temple' },
    { img: seegiri, title: 'Ravana Falls' },
    { img: seegiri, title: 'Galle Fort' },
  ]

  const visibleAttractions = showAll ? attractions : attractions.slice(0, 3)

  return (
    <div className="attractionBar">
      <div className="attHeading">Attractions of Sri Lanka</div>

      <div className="attContentVertical">
        {visibleAttractions.map((item, index) => (
          <div key={index} className="attCardVertical">
            <img src={item.img} alt={item.title} className="attImgVertical" />
            <div className="attCardTitle">{item.title}</div>
          </div>
        ))}
      </div>

      {!showAll && (
        <button className="seeMoreBtn" onClick={() => setShowAll(true)}>
          See More
        </button>
      )}
    </div>
  )
}

export default AttractionBar
