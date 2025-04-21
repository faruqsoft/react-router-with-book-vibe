import React from 'react';
import Navbar from "../../components/Header/Navbar.jsx";
import {Outlet} from "react-router";
import Footer from "../../components/Footer/Footer.jsx";

const Roots = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;