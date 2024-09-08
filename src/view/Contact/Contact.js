import React from "react";
import Navbar from "./../../component/Navbar/Nvabar";
// import AboutImg from "./Contact us-rafiki (1).png"
import "./Contact.css"
import Footter from "./../../component/Fotter/Footer";
function Contact()
{
    return (
        <div>
            <Navbar/>
            <h1 className="title" >Contact page </h1>
            {/* <img src={AboutImg} className="img"/> */}
            <Footter/>
        </div>
    )
}
export default Contact
