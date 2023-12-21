import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home"
import { ListProducts } from "./pages/list-products";
import { ListCategories } from "./pages/list-categories";
import { ListUsers } from "./pages/list-users";
import { ListVentas } from "./pages/list-ventas";
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
            },
            {
                path: '/users',
                element: <ListUsers/>
            },
            {
                path: '/ventas',
                element: <ListVentas/>
            }
        ]
    }
])