import React from "react";
import Navbar from "./../../component/Navbar/Nvabar";
//import Homeimg from "./Contact us.jpg"
import "./Home.css"
import Footter from "./../../component/Fotter/Footer";
import toast, { Toaster } from "react-hot-toast";
function Home()
{
    return (
        <div>
            {/*nav bar  */}
            <Navbar/>
            <h1 className="title">Home </h1>
            {/* <img src={Homeimg} className="img" /> */}
                {/* "Link comopnent is used as anchor tag in react router dom laibery href is replaced with to  */}
                <button type="button" className="toast" onClick={()=>{toast.success("Hello there",{icon:"❤️", duration:"2000",style:{backgroundColor:"orange"}})}}>Sucess</button>
                <button type="button" className="toast" onClick={()=>{toast.error("Something went Wrong")}}>Error</button>
                <button type="button" className="toast" onClick={()=>{toast.loading("please wait..")}}>Loading</button>
                <button type="button" className="toast" onClick={()=>{toast.success("Loaded sucesssfully")}}>loaded Sucessfully</button>



                <Toaster/>
            <Footter/>
        </div>
    )
}
export default Home