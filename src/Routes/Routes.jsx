import React from 'react';
import {createBrowserRouter} from "react-router";
import Roots from "../pages/Roots/Roots.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Home from "../pages/Home/Home.jsx";

 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots/>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {index:true,
                path:"/",
                element:<Home/>

            }
        ]
    },
]);

