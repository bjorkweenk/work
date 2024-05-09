import React from 'react';

import "./logo.css"

import image from "../../assets/logo.png"


const Logo = () => {
    return (
<>
        <div className='logoContainer'>
                <img src={image} />
            </div>
        </>
    );
};

export default Logo;