// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
// dodger.style.height = "180px";
// dodger.style.width = "600px";
console.log(dodger.style.left); 
console.log(dodger.style.right); 

dodger.style.bottom = "0px";

document.addEventListener("keydown", function(e) {
    if (e.key === 'ArrowLeft') {
       moveDodgerLeft();
    }
});



function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0 ) {
        dodger.style.left = `${left - 1}px`;
    }
}


document.addEventListener("keydown", function(e) {
    if (e.key === 'ArrowRight') {
       moveDodgerRight();
    }
});

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0 ) {
        dodger.style.left = `${left + 1}px`;
    }
}

