import React from 'react';
import {createBrowserRouter} from "react-router";
import Roots from "../pages/Roots/Roots.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import BookDetails from "../pages/bookDetails/bookDetails.jsx";

 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots/>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {index:true,
                loader:()=>fetch('BooksData.json'),
                path:"/",
                element:<Home/>

            },
            {
                path:'/About',
                element:<About/>
            },
            {
                path:'/bookDetails/:id',
                loader:()=>fetch('BooksData.json'),
                element:<BookDetails/>
            }
        ]
    },
]);

