import React from 'react'

function shareThought() {
  return (
    <div className="w-full text-center py-6 border-b border-gray-400 bg-gray-100">
      <h3 className="text-lg mb-4">Share your thought with us</h3>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Enter your Email"
          className="px-3 py-1 rounded-l-lg border border-gray-300 focus:outline-none"
        />
        <button className="px-4 py-1 bg-black text-white rounded-r-lg">●</button>
      </div>
    </div>
  )
}

export default shareThought
