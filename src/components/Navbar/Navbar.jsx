import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div> 
            <nav className='navbar'>
            <ul> 
              <li><a href="./projects"> PROJECTS</a></li>
              <li><a href="./about"> ABOUT </a></li>
              <li><a href="./contact">CONTACT</a></li>
            </ul>
            </nav>
         
        </div>
    );
};

export default Navbar;