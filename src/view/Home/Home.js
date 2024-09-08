import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import Homeimg from "./Contact us.jpg"
import "./Home.css"
import Footter from "../../components/Footer/Footer";
function Home()
{
    return (
        <div>
            {/*nav bar  */}
            <Navbar/>
            <h1 className="title">Home </h1>
            <img src={Homeimg} className="img" />
            <Footter/>
        </div>
    )
}
export default Home