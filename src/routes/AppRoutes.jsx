import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home/home';
import Work from '../pages/Work/work'
import Contact from '../pages/Contact/contact'
import Wuqinggui from '../pages/Wuqinggui/wuqinggui';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<Wuqinggui/>}/>
        </Routes>
    )
}

export default AppRoutes; 