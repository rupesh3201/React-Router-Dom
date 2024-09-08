import React from "react";
import "./Nvabar.css"
import { Link } from "react-router-dom";


function Navbar()
{
    return (
       <div className="navbar">
      kuch meetha🍫ho jaye 

    <div className="navbar_links ">
       <Link to="/"> Home</Link>
       <Link to="/About" > About</Link>
       <Link to="/Contact" > Contact</Link>
       </div>
       </div>
    )
}
export default Navbar