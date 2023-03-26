import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home';
import Layout from '../pages/Layout'
import User from '../pages/User/User';

const RouterApp = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<User />} />

                <Route path='/user' element={<User />} />
                <Route path='/user/home/:uid' element={<Home />} />
            </Route>

        </Routes>
    );
};

export default RouterApp;