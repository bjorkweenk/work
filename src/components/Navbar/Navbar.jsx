import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <header>
            <nav>
            <ul>
              <li><a href="/"> home</a></li>
              <li><a href="./work">work</a></li>
              <li><a href="./about">about</a></li>
              <li><a href="./contact">contact</a></li>
            </ul>
            </nav>
            </header>
        </div>
    );
};

export default Navbar;