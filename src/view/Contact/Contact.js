import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import AboutImg from "./Contact us-rafiki (1).png"
import "./Contact.css"
import Footter from "../../components/Footer/Footer";
function Contact()
{
    return (
        <div>
            <Navbar/>
            <h1 className="title" >Contact page </h1>
            <img src={AboutImg} className="img"/>
            <Footter/>
        </div>
    )
}
export default Contact
