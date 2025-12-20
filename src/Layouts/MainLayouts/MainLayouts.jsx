import React from 'react';
import NavBar from '../../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer';

const MainLayouts = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto min-h-screen'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;