

function Names({player1 , player2 , wins }){
    


    if (wins != '') {
        document.getElementById('whoWon').innerHTML = wins + " won"
    }

    return <div className="d-flex justify-content-center flex-column align-items-center text-white">
        <h1>Tic-Tac-Toe</h1>
        <div className="d-flex justify-content-around">
            <h1 className="m-5 my-4">{player1} is X</h1>
            <h1 id="whoWon"></h1>
            <h1 className="m-5 my-4">{player2} is O</h1>
        </div>
        
    </div>
}

export default Names;