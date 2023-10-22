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
            checkWinner();
        });
      
      square.addEventListener('mouseenter', () => {
        //if (square.classList.contains('empty')) {
          square.classList.add('hover');
        //} 
      });   

      square.addEventListener('mouseleave', () => {
        square.classList.remove('hover');
      });  
    });

    function checkWinner() {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];

      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          const winner = board[a];
          const status = document.getElementById('status');
          status.innerHTML = `Congratulations! ${winner} is the Winner!`;
          status.classList.add('you-won');
          return;
        }
      }
    };


  });
