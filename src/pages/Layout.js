import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Layout = () => {
    return (
        <div className='Layout'>
            Layout
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;