const body = document.querySelector("body");

// create a container to hold grid squares
function createContainer(){
    const container = document.createElement("div");
    body.appendChild(container);
    container.setAttribute("id", "container");
}
createContainer();

// add button for user to resize sketch pad
const btn = document.createElement("button");
body.insertBefore(btn, container);
btn.setAttribute("id", "button");
btn.textContent = "PAD SIZE";

// add button to erase color
const eraserBtn = document.createElement("button");
body.appendChild(eraserBtn);
eraserBtn.setAttribute("id", "eraser");
eraserBtn.textContent = "ERASER";

// add 16x16 square divs to container div
let size =16; //default pad size
// function to create and add a single square to the container 
function createSquare() {
    const square = document.createElement("div");
    container.appendChild(square);
    square.className = "square";
    // dynamically change square size respect to pad size
    square.style.cssText = `width: ${960/size}px; height: ${960/size}px;`;
}

// fill the container with squares
for(let x = 1; x <= size * size; x++ ){
    createSquare();
}

// generate random rgb color
function randomRGB(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    return rgbColor;
}
 
// change sqaure color when clicked
function changeColor() {
const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("click", (e) => {
    console.log(e);
    e.target.style.backgroundColor = randomRGB();   
}));
}
changeColor();

// erase color using eraser button
function eraser(){
    const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("click", (e) => {
    console.log(e);
    e.target.style.backgroundColor = "white";   
}));
}
eraserBtn.addEventListener("click", eraser());

// prompt to get user input for pad size when clicking the button and completely recreate new pad
btn.addEventListener("click", function(){
    let newSize = prompt("how many square you want per side (max 100)");
    if(parseInt(newSize) > 100){
        size = 16;
        alert("entered value is more than 100");
    }else {
        size = parseInt(newSize);
        const oldContainer = document.getElementById("container");
        oldContainer.remove();
        createContainer();
        for(let x = 1; x <= size * size; x++ ){
            createSquare();
        }
    }
    changeColor();
});

