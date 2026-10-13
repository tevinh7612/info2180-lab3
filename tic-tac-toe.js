document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM Loaded");

    const board = document.getElementById("board");

    const childElemsOfBoard = board.children;

    for (const elem of childElemsOfBoard){
        elem.classList.add("square");
    }   

});