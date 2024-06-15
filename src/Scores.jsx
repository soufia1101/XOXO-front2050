import axios from "axios"
import { useEffect, useState } from "react"
import './styles/scores.css'


function Scores({}){
    const [top10 , setTop10] = useState([])
    function getTop10(){
        console.log('entered')
        axios.get('http://127.0.0.1:8000/players').then((response) =>{setTop10(response.data)})
            
       
    }

    useEffect(() => {
        console.log('This will run once when the component mounts');
        getTop10()
    }, []); 

    return <div className="scores d-flex flex-column align-items-center">

        <h1 className="text-white my-3">Tic Tac Toe </h1>
        <h1 className="text-white my-3 mb-5">SCORE TABLE(TOP 10)</h1>

        <ul className="w-100 d-flex flex-column align-items-center p-0 mt-5">

            <li className="text-white d-flex justify-content-between w-75 mb-5" key="title">
                <h2>Row</h2>
                <h2>Name</h2> 
                <h2>Score</h2>
            </li>

            {top10.map((ob , i)=>(
                <li className="text-white d-flex justify-content-between w-75 mb-4" key={ob.Name}>
                    <h2>{i+1}</h2>
                    <h2>{ob.Name}</h2> 
                    <h2>{ob.Score}</h2>
                </li>
            ))}
        </ul>
    </div>
}

export default Scores