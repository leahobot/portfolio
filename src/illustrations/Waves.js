import React from "react";

function Waves () {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
            <defs>
                <linearGradient id="gradient" x1="20%" x2="80%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#18B1D1" />
                <stop offset="100%" stopColor="#6C757D" />
                </linearGradient>
            </defs>
            <path
                fill="url(#gradient)" 
                d="M0,128L60,112C120,96,240,64,360,90.7C480,117,600,203,720,208C840,213,960,139,1080,128C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
    )
}

export default Waves;