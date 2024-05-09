import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home/home';
import Projects from '../pages/Projects/projects';
import Contact from '../pages/Contact/contact'
import About from '../pages/About/about';



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About/>}/>
        </Routes>
    )
}

export default AppRoutes; 