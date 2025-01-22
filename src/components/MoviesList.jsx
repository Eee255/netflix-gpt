/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import Moviecard from "./Moviecard"

const MoviesList = ({title,movies}) => {
  return (
    <div className="px-4">
      <h1 className="text-md md:text-lg font-semibold my-2">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex shrink-0 ">
          {
            movies?.map((each) => (
              <Link key={each.id} to={`video/${each.id}`}><Moviecard movies={each} key={each.id}/></Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MoviesList