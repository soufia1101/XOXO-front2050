import { useContext, useState } from "react"
import "../styles/square.css"
import circle from "../assets/O.png"
import cross from "../assets/X.png"
import { Context } from "../App"

function Square({turn , turnChanger , Board ,num }){
    const [full , setfull] = useState(false)
    const [done , setDone] = useContext(Context)

    function Draw(e , turn){
        console.log(done)
        if (turn%2==0 && !full && !done) {
            e.target.innerHTML = `<img src="${cross}">`
            turnChanger() 
            Board(num)
                
        }else if (!full && !done){
            e.target.innerHTML = `<img src="${circle}">`
            turnChanger()
            Board(num)
        }
        
        setfull(true)
    }

    return <button className="body" onClick={(e)=>Draw(e , turn)}>
        
    </button> 
}

export default Square;