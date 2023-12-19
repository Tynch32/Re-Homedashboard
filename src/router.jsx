import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home"
import { ListProducts } from "./pages/list-products";
import { ListCategories } from "./pages/list-categories";
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
                path: '/products',
                element: <ListProducts/>
            },
            {
                path: '/categories',
                element: <ListCategories/>
            }
             
        ]
    }
])