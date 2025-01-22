/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";


const TitleContainer = ({title,about}) => {


  return (
    <div className="absolute pt-[15%] px-12 text-white hidden md:block">
        <h1 className="font-bold text-xl md:text-3xl font-sans mb-2">{title}</h1>
        <p className="w-1/3 font-sans font-semibold hidden md:block">{about}</p>
        <div className="flex mt-2">
            <button className="px-3 py-1 flex justify-center items-center bg-white text-black rounded-md hover:bg-opacity-80"><span className="m-1 pt-1"><FaPlay/></span>Play</button>
            <button className="px-3 py-1 flex justify-center items-center bg-gray-500 bg-opacity-50 rounded-md mx-2 "> <span className="m-1 pt-1"><CiCircleInfo/></span> More info</button>
        </div>
    </div>
  )
}

export default TitleContainer