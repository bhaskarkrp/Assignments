import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { About } from './About';
import { Navbar } from './Navbar';
import { Users } from './Users';
import { UserPage } from './UserPage';
import { Setting } from './Setting';

export const Routers = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:userId" element={<UserPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users/setting" element={<Setting />} />
                <Route path="*" element={<h3>Page Not Found</h3>} />
            </Routes>
        </>
    )
}