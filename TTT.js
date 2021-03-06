
Array.from(document.getElementsByClassName('block')).forEach(element => {
   element.addEventListener("click", handleCellClick);
});
// document.getElementBy('')addEventListe

let currentPlayer = "X";
let gameOn = true;
const winningIndexes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let winner =''

function handleCellClick(event) {
    let element = event.target;
    if (gameState[element.id] == "" && gameOn) {
        gameState[element.id] = currentPlayer;
        element.innerHTML = currentPlayer;
        handleTurn();
    }
    winningIndexes.forEach(winningindex => {
        if (gameState[winningindex[0]] == gameState[winningindex[1]] && gameState[winningindex[0]] == gameState[winningindex[2]] && gameState[winningindex[0]] != '') {
            gameOn = false;
            winner = gameState[winningindex[0]];
            console.log(gameState)
            document.getElementById('winner').innerHTML = `${winner} is the WINNER!!!`
        }
    })
    if (winner == "" && !gameState.includes("")) {
        gameOn = false;
        document.getElementById('winner').innerHTML = "This Game is Draw"
    }

}

function handleTurn() {
    if (currentPlayer === 'X') {
    currentPlayer = 'O' 
    } else {
    currentPlayer = 'X' 
    };
};

// i should clear HTML board
// gameOn status should be back ON
// reset the gameState variable 
// winner to an empty string
// the current player should be X

function gameReset() {
    Array.from(document.getElementsByClassName('block')).forEach(element => {
        element.innerHTML = ""
    })
    gameOn = true;
    gameState = [
        "","","",
        "","","",
        "","","",
    ]
    document.getElementById('winner').innerHTML = ""
    currentPlayer = "X"
}




let gameState = [
    "","","",
    "","","",
    "","","",
]

