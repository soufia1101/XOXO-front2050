import { Link } from "react-router-dom";
import "../styles/root.css"
import { useState } from "react";
import axios from "axios";



function Root(){

    
    

    return <div className="d-flex flex-column align-items-center text-white root" >
        <h1 className="text-center">Tic-Tac-Toe</h1>
        <Link to="/login" ><button className="fs-3 my-3 startbtn text-white">START</button></Link>
        <Link to="/scores"><button className=" fs-3 my-3 text-white scoresbtn">Scores</button></Link>
        
        <p>proved by your Sarina Khodadi</p>
    </div>
}

export default Root;