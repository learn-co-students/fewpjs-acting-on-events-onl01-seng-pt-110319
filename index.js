// Your code here
let dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4";
dodger.style.height = "180px";
dodger.style.width = "50x";
console.log(dodger.style.left); 
console.log(dodger.style.right); 

dodger.style.bottom = "0px";

document.addEventListener("keydown", function(e) {
    // adding eventlistener, when the key is pressed down it fires off a callback function
    // if that key is equal to arrow left, call the move dodger left functoin
    if (e.key === 'ArrowLeft') {
       moveDodgerLeft();
    }
});



function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    // defining variable left numbers, calling the dodger element adding the style and using .replace
    //.replace searches a string for a specified value and returns a new string where the specified values are replaced
    // the first arg "px" is the search value, the second value "" is the newvalue.. we use "" as a placeholder for the time being

    let left = parseInt(leftNumbers, 10);
// creating a variable left and parsing the string to an integer. 
// calling left numbers, parsing that and passing in 10 as into the new value
    if (left > 0 ) {
        // comparing left variable to 0 which results as true 
        dodger.style.left = `${left - 1}px`;
        // every time the left arrow key is pressed it moves left one pixel
    }
}


document.addEventListener("keydown", function(e) {
    if (e.key === 'ArrowRight') {
       moveDodgerRight();
    }
});

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    // doing the samw thing as above
    let left = parseInt(leftNumbers, 10);
    // also doing the same thing as the move dodger left fucnction

    if (left > 0 ) {
        dodger.style.left = `${left + 1}px`;
        // this time we are moving left + 1 so when the right arrow is pressed it moves to the right one pixel.
    }
}




