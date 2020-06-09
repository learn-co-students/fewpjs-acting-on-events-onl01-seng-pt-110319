// Your code here

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let moveLeft = parseInt(leftNumbers, 10)
    if (moveLeft > 0) {
      dodger.style.left = `${moveLeft - 1}px`
    }
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft()
    }
  })
  
  
  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let moveRight = parseInt(leftNumbers, 10)
    if (moveRight > 0) {
      dodger.style.left = `${moveRight + 1}px`
    }
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
  })