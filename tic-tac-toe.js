document.addEventListener("DOMContentLoaded", () => {

    const board = document.getElementById("board");
    const childElemsOfBoard = board.children;

    for (const elem of childElemsOfBoard){
        elem.classList.add("square");
    }

    // On click if a user clicks on empty square, it should return a X or O
    board.addEventListener("click", e => move(e, childElemsOfBoard));
    // On mouseover applies "hover" class to gameboard square.
    board.addEventListener("mouseover", e => editClassOnHover(e))
    // On mouseover removes "hover" class to gameboard square.
    board.addEventListener("mouseout", e => editClassOnHover(e))
});

const players = ["X", "O"];
let currentPlayer = "X";
let currentRound = 0;
const gameState = Array(9).fill("");

function move(event, elemList){
            
    const selectedCell = event.target;
    const selectedCellIsSquare = selectedCell.classList.contains("square");
    const selectedCellIsEmpty = selectedCell.innerHTML === "";
    const selectedCellIndex = Array.from(elemList).indexOf(selectedCell);

    if (selectedCellIsSquare && selectedCellIsEmpty && currentRound < 9){
        selectedCell.classList.add(currentPlayer);
        selectedCell.innerHTML = currentPlayer;
        gameState[selectedCellIndex] = currentPlayer;
        currentRound++;
        currentPlayer = players[currentRound%2];
        console.log(gameState)
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