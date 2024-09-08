import React from "react";
import Navbar from "./../../component/Navbar/Nvabar";
//import Homeimg from "./Contact us.jpg"
import "./Contact.css"
import Footter from "./../../component/Fotter/Footer";
function Home()
{
    return (
        <div>
            {/*nav bar  */}
            <Navbar/>
            <h1 className="title">Home </h1>
            {/* <img src={Homeimg} className="img" /> */}
            <Footter/>
        </div>
    )
}
export default Home