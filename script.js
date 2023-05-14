// create a container to hold grid squares
const body = document.querySelector("body");
const container = document.createElement("div");
body.appendChild(container);
container.setAttribute("id", "container");

// add 16x16 square divs to container div
for(let x = 1; x <= 256; x++ ){
    const square = document.createElement("div");
    container.appendChild(square);
    square.setAttribute("id", "square");
}
