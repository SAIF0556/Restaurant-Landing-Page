import HeroImage from './HeroImage'
import { FaArrowRight } from 'react-icons/fa'

function Hero() {
  return (
    <div className="flex sm:flex-row flex-col content-center   mt-1 bg-transparent">
      <div className="leftContainer flex flex-col sm:justify-center h-[650px] sm:h-[600px] content-center px-16 pt-4 sm:w-7/12 w-full bg-gray-100  ">
        <h3 className="font-bold font-sans">Discount up to 20%</h3>
        <div className="heading lg:w-[35rem]">
          <h1 className="text-5xl inline-block ">
            Buy Fresh And Organic <br /> Grocery Food
            <span>
              <img
                className="rounded-lg h-12 w-36 m-4 inline"
                src="lemon.png"
                alt="lemon"
              />
            </span>
          </h1>
          <p className="text-gray-500 font-semibold w-11/12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            delectus dolor quae iste optio enim natus, fuga rerum vel dolore.
          </p>
          <div className="container flex flex-col sm:flex-row mr-4 lg:gap-32 mt-8">
            <button className="bg-green-700 rounded-full p-1 md:px-4 text-gray-200 h-12 lg:h-8 flex text-center justify-center items-center">
              SHOP NOW <FaArrowRight className="inline sm:mr-2 ml-8" />
            </button>
            <div className="stats text-green-700 flex flex-wrap justify-center sm:size-2 size-auto  md:size-auto flex-row mt-8 sm:mt-0 sm:flex-col md:flex-row ml-2 sm:ml-8 gap-8 ">
              <div className="flex-shrink   border-r md:pr-4 sm:flex-col lg:border-r sm:border-0  border-gray-500">
                <h1 className="font-bold flex ">35K +</h1>
                <p className="m-1 flex">Users</p>
              </div>
              <div className="flex-shrink sm:flex-col ">
                <h1 className="font-bold flex">18K +</h1>
                <p className="m-1 flex">Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightContainer px-16 py-4 bg-green-800  flex flex-row sm:w-5/12 sm:h-[600px]  h-32  justify-between content-center"></div>
      <HeroImage />
    </div>
  )
}

export default Hero
