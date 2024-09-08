import React from "react";
import Navbar from "./../../component/Navbar/Nvabar";
// import AboutImg  from "./About us page-pana (1).png"
import "./About.css"

import Footter from "./../../component/Fotter/Footer";
function About()
{
    return (
        <div>
             <Navbar/>
            <h1 className="title" >About page </h1>
            {/* <img className="img" src= {AboutImg} /> */}
            <Footter/>
        </div>
    )
}
export default About
