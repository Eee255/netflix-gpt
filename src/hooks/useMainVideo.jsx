
import { useDispatch } from "react-redux"
import { OPTIONS } from "../utilities/constans"
import { useEffect } from "react"
import { addTrailers } from "../utilities/moviesSlice"


const useMainVideo = (movieId) => {
    const dispatch = useDispatch()

    const getTrailer = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,OPTIONS)

        const json = await data.json() 
        const filteredData = json.results.filter((each) => each.type === "Trailer")
        const trailers = filteredData.length ? filteredData[0] : json.results[0] 
        dispatch(addTrailers(trailers))
    } 

    useEffect(() =>{
        getTrailer()

    },[])

}

export default useMainVideo