/* eslint-disable react/prop-types */
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Card({ img, heading }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 shadow-2xl lg:shadow-none xl:shadow-2xl rounded-xl p-4  mx-12 my-8 justify-center sm:py-4 sm:px-8 border border-green-900 lg:border-none xl:border-2 sm:justify-between ">
      <div className="p flex justify-center">
        <img
          className="rounded-full max-w-max size-24 md::ml-4 border-2 border-green-700"
          src={img}
          alt=""
        />
      </div>
      <div className="content flex flex-col items-center mr-0 md:mr-8 divide-gray-500 divide-y-2 divide-dashed">
        <div className="heading w-full sm:w-96 flex flex-row justify-between ">
          <h2 className="font-bold font-sans text-left">{heading}</h2>
          <h1 className="text-green-700 font-bold">$8.45</h1>
        </div>
        <div className="description sm:w-96 flex flex-row justify-between pb-2  border-b-2 border-gray-400 sm:border-none">
          <p className="text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="text-green-700 flex items-center text-sm">
            SHOP NOW <FaArrowRight className="inline sm:mr-2 ml-8 lg:mr-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
