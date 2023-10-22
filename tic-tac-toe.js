document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('.square');
  
    squares.forEach((square, index) => {
      square.classList.add('empty');
      square.dataset.index = index;
    });
  });
  