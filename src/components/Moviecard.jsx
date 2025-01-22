/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { IMAGE_CMD } from "../utilities/constans"
import { toggleVideo } from "../utilities/moviesSlice"

const Moviecard = ({movies}) => {
    const  {poster_path} = movies 

    const dispatch = useDispatch()

    const handleBrowse = () =>{
      dispatch(toggleVideo())
    }

  return (
    <div className="w-24 md:w-36   mx-1">
        <img src={IMAGE_CMD + poster_path} alt="poster" className="hover:scale-110 
        duration-500 transition-transform cursor-pointer" onClick={handleBrowse}/>
    </div>
  )
}

export default Moviecard