import { useEffect, useState } from "react"
import Square from "./components/square"


let BoardData = ['','','','','','','','','']

function Board({CheckWin , done}){

  useEffect(()=>{
    BoardData = ['','','','','','','','','']
  },[])

  const [turn , setTurn] = useState(0)


  function ChangeTurn(){
    if (turn == 0) {
      setTurn(1)
    }else{
      setTurn(0)
    }
  }


  function UpdateBoard(num){
    if (turn%2==0){
      BoardData[num]='cross'
      CheckWin('cross',BoardData)

    }else{
      BoardData[num]='circle'
      CheckWin('circle',BoardData)
    }
    console.log(BoardData)
  }

  return <div className="mb-5">
    
    <div className="row">
      <Square className="col" turn={turn} turnChanger={ChangeTurn} num={0} Board = {UpdateBoard}></Square>
      <Square className="col" turn={turn} turnChanger={ChangeTurn} num={1} Board = {UpdateBoard}></Square>
      <Square className="col" turn={turn} turnChanger={ChangeTurn} num={2} Board = {UpdateBoard}></Square>
    </div>
    <div className="row">
      <Square className="col" turn={turn} turnChanger={ChangeTurn} num={3} Board = {UpdateBoard}></Square>
      <Square className="col" turn={turn} turnChanger={ChangeTurn} num={4} Board = {UpdateBoard}></Square>
      <Square className="col" turn={turn} turnChanger={ChangeTurn} num={5} Board = {UpdateBoard}></Square>
    </div>
    <div className="row">
      <Square className="col" turn={turn} turnChanger={ChangeTurn} num={6} Board = {UpdateBoard}></Square>
      <Square className="col" turn={turn} turnChanger={ChangeTurn} num={7} Board = {UpdateBoard}></Square>
      <Square className="col" turn={turn} turnChanger={ChangeTurn} num={8} Board = {UpdateBoard}></Square>
    </div>
  </div>
}

export default Board ;
  