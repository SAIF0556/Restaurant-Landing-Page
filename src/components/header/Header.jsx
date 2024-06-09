import IconBar from '../utils/Icons'
import ButtonBar from '../utils/ButtonsBar'
import { FaArrowRight } from 'react-icons/fa'

function Header() {
  return (
    <div className="header w-auto content-center bg-transparent text-green-800 sm:z-50 sm:fixed top-0 left-0 right-0 flex sm:flex-row  flex-col">
      <div className="headerLeftContainer bg-gray-100 px-8 py-4 items-center justify-between content-center flex flex-row sm:w-7/12 ">
        <h1 className="font-semibold">
          GO <span className="font-bold">FOOD</span>
        </h1>

        <ButtonBar />
      </div>
      <div className="headerRightContainer px-8 py-4 bg-green-800 items-center justify-between content-center flex flex-row sm:w-5/12 ">
        <a href="#connect" className="text-sm content-center text-white">
          Connect with us <FaArrowRight className="inline mr-2" />
        </a>
        <div className="buttons flex flex-row">
          <IconBar />
        </div>
      </div>
    </div>
  )
}

export default Header
