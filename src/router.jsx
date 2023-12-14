import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home"
import { ListMovies } from "./pages/list-movies";
import { Layaout } from "./layouts";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Layaout/>,
        children:[ 
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/movies',
                element: <ListMovies/>
            }
             
        ]
    }
])