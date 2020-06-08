// Your code here
let dodger = document.getElementById('dodger');
let game = document.getElementById('game');

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    } 
}

function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left + 1}px`
    }
  }

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
    console.log(e.key);
});