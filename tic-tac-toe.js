document.addEventListener("DOMContentLoaded", () => {

    const board = document.getElementById("board");
    const childElemsOfBoard = board.children;

    for (const elem of childElemsOfBoard){
        elem.classList.add("square");
    }

    // On click if a user clicks on empty square, it should return a X or O
    board.addEventListener("click", e => move(e, childElemsOfBoard));
    // On mouseover applies "hover" class to gameboard square.
    board.addEventListener("mouseover", e => editClassOnHover(e));
    // On mouseout removes "hover" class to gameboard square.
    board.addEventListener("mouseout", e => editClassOnHover(e));
});

const players = ["X", "O"];
let currentPlayer = "X";
let currentRound = 0;
let gameActive = true;
const gameState = Array(9).fill("");
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function move(event, elemList){
            
    const selectedCell = event.target;
    const selectedCellIsSquare = selectedCell.classList.contains("square");
    const selectedCellIsEmpty = selectedCell.textContent === "";
    const selectedCellIndex = Array.from(elemList).indexOf(selectedCell);

    if (selectedCellIsSquare && selectedCellIsEmpty && currentRound < 9 && gameActive){
        selectedCell.classList.add(currentPlayer);
        selectedCell.textContent = currentPlayer;
        gameState[selectedCellIndex] = currentPlayer;
        checkWinner();
        currentRound++;
        currentPlayer = players[currentRound%2];
    }   
}
    
function editClassOnHover(event){

    const selectedCell = event.target;
    const selectedCellEvent = event.type;
    const selectedCellIsSquare = selectedCell.classList.contains("square");

    if (selectedCellIsSquare && selectedCellEvent === "mouseover"){
        selectedCell.classList.add("hover");
    } else if (selectedCellIsSquare && selectedCellEvent === "mouseout"){
        selectedCell.classList.remove("hover");
    }
}

function checkWinner(){
    const statusMsg = document.getElementById("status");

    for (const combo of winningCombos){
        const currentCombo = [];

        for (const index of combo){
            currentCombo.push(gameState[index]);
        }

        if (currentCombo.every(x => x === currentPlayer)){
            statusMsg.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
            statusMsg.classList.add("you-won");
            gameActive = false;
            break;
        } 
    }
}