import React from 'react';
import NavBar from '../../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer';

const MainLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;