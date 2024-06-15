import React, { createContext, useContext, useState } from "react";
import "./styles/login.css"
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "./First";





function Login(){

    const {player1 , setPlayer1} = useContext(UserContext)
    const {player2 , setPlayer2} = useContext(UserContext)


    function LoginOrCreateUser(){
        

        axios.post('http://127.0.0.1:8000/Players',player1).then((response) =>{setPlayer1(response.data)})


        axios.post('http://127.0.0.1:8000/Players',player2).then((response) =>{setPlayer2(response.data)})
        
    }

    return <div className="login d-flex flex-column">
        <h1 className="text-center text-white mt-3 mb-5 pb-5 ">Tic-Tac-Toe</h1>

        <div className="d-flex flex-column align-items-center my-5">
            <h3 className="text-white">fill the form</h3>

            <input className="form-control w-25 mt-4  py-2 text-white" type="text"  name="" placeholder="Enter Player1 Name" onChange={(e)=>setPlayer1({Name : e.target.value , Score:0})}></input>

            <input className="form-control w-25 mt-4  py-2 text-white" type="text" name="" placeholder="Enter Player2 Name" onChange={(e)=>setPlayer2({Name : e.target.value , Score:0})}></input>

               
                <Link className=" mt-4 w-25 text-white" to="/tictactoe"><button className="w-100 py-2 text-white"  onClick={()=>LoginOrCreateUser()}>Start Game</button></Link>
          

        </div>
        <h2 className="text-center my-5 ">Proved By Your Sarina Khodadi</h2>
        
    </div>
}

export default Login;