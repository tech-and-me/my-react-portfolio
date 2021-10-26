import React from "react";
// import Types from "types.react";
import Typewriter from "typewriter-effect"




const Header=()=> {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hey! I am Phary Phal, a Web Developer</h1>
                <Typewriter
                options={{
                    strings: ["I am passionate about developing beautiful websites ","Checkout my portfolio from the link below"],
                    autoStart:true,
                    loop: true,
                }}
                />                
            </div>
            
        </div>
    )
}

export default Header
