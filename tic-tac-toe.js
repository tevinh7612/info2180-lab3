document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
  
    squares.forEach((square, index) => {
      square.classList.add('square', 'empty');
      square.dataset.index = index;
    });
  });
