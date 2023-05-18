const body = document.querySelector("body");

// add button for user to resize sketch pad
const btn = document.createElement("button");
body.appendChild(btn);
btn.setAttribute("id", "button");
btn.textContent = "PAD SIZE";

// add button to erase color
const eraserBtn = document.createElement("button");
body.appendChild(eraserBtn);
eraserBtn.setAttribute("id", "eraser");
eraserBtn.textContent = "ERASER";

// create a container to hold grid squares
function createContainer(){
    const container = document.createElement("div");
    body.insertBefore(container, eraserBtn);
    container.setAttribute("id", "container");
}

// function to create and add a single square to the container 
function createSquare() {
    const square = document.createElement("div");
    container.appendChild(square);
    square.className = "square";
    // dynamically change square size respect to pad size
    square.style.cssText = `width: ${960/size}px; height: ${960/size}px;`;
}

// generate random rgb color
function randomRGB(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    return rgbColor;
}

// erase color using eraser button
function eraser(){
    const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("click", (e) => {
    console.log(e);
    e.target.style.backgroundColor = "white";   
}));
}

// change sqaure color 
function changeColor(e) {
    e.target.style.backgroundColor = randomRGB();   
}

// prompt to get user input for pad size when clicking the button and completely recreate new pad
function getPadSize(){
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
    listenToSqaure();
}

createContainer();

// add 16x16 square divs to container div
let size =16; //default pad size

// fill the container with squares
for(let x = 1; x <= size * size; x++ ){
    createSquare();
}

listenToSqaure();

// listen to change square color when clicked
function listenToSqaure(){
const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("click",(e) => changeColor(e)));
}

btn.addEventListener("click", getPadSize);

// eraserBtn.addEventListener("click", eraser());

 




