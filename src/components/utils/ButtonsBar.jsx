import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const ButtonBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative flex">
      <div className="flex lg:hidden justify-end p-4">
        <button
          className="md:hidden text-green-700" // Change color to green
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>

      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row md:gap-1 font-semibold bg-green-800 md:bg-transparent rounded-md`} // Customize Tailwind classes
      >
        <button className="flex flex-row px-1 py-2 text-white md:text-green-700">
          <a href="#home">Home</a>
          <img
            className="self-center size-3 mx-1"
            src="./downwardIcon.png"
            alt=""
          />
        </button>
        <button className="flex flex-row px-1 py-2 text-white md:text-green-700">
          <a href="#groceries">Groceries</a>
          <img
            className="self-center size-3 mx-1"
            src="./downwardIcon.png"
            alt=""
          />
        </button>
        <button className="flex flex-row px-1 py-2 text-white md:text-green-700">
          <a href="#pages">Pages</a>
          <img
            className="self-center size-3 mx-1"
            src="./downwardIcon.png"
            alt=""
          />
        </button>
      </div>
    </div>
  )
}

export default ButtonBar
