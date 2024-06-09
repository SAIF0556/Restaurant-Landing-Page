import React, { useState } from 'react'
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaBars,
} from 'react-icons/fa'

const IconButton = ({ icon, badge }) => (
  <div className="relative w-8 h-8 bg-white bg-opacity-10 rounded-full flex justify-center items-center">
    {icon}
    {badge !== undefined && (
      <div className="absolute -top-2 -right-2 bg-yellow-500 text-black rounded-full px-1 text-xs">
        {badge}
      </div>
    )}
  </div>
)

const IconBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="flex lg:hidden justify-end p-4">
        <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
      </div>
      <div
        className={`flex-col bg-green-800  lg:flex gap-1 mr-3 lg:flex-row lg:gap-1 justify-center items-center p-4 rounded-lg lg:static absolute  ${
          isOpen ? 'flex' : 'hidden'
        } lg:block`}
      >
        <IconButton icon={<FaSearch className="text-white " />} />
        <IconButton icon={<FaUser className="text-white" />} />
        <IconButton icon={<FaHeart className="text-white" />} badge={2} />
        <IconButton icon={<FaShoppingBag className="text-white" />} badge={0} />
      </div>
    </div>
  )
}

export default IconBar
