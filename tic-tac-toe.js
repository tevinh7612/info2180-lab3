document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
  
    squares.forEach((square, index) => {
      square.classList.add('square', 'empty');
      square.dataset.index = index;

      square.addEventListener('click', () => {
        if(square.classList.contains('empty')){
            square.classList.remove('empty');
            square.classList.add(currentPlayer);
            square.textContent = currentPlayer;
            board[index] = currentPlayer;

            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            }
        });
    });
  });
