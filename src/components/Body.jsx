
import Browser from "./Browser"
import Login from "./Login"
import Video from "./Video"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


const Body = () => {
    const  appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        },
        {
            path: "browser/video/:id",
            element:<Video/>
        }
    ])



  return (
    <div className="overflow-x-hidden">
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
