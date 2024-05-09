import React from 'react';

import "./background.css"

import video from "../../assets/background-video.mp4" 


const Background = () => {
    return (
<>
        
        <div className='bgContainer'>
            <div className='overlay'>
                <video src={video} autoPlay loop muted />
                <h5 className='overlay-text1'> 2024 </h5>
                <h1 className='overlay-text'> Portfolio coming </h1>
            </div>
         
        </div>
        </>
    );
};

export default Background;