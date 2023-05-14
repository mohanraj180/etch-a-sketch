// create a container to hold grid squares
const body = document.querySelector("body");
const container = document.createElement("div");
body.appendChild(container);
container.setAttribute("id", "container");

// add button for user to resize sketch pad
const btn = document.createElement("button");
body.insertBefore(btn, container);
btn.setAttribute("id", "button");
btn.textContent = "PAD SIZE";

// add 16x16 square divs to container div
let size =16; //default pad size
for(let x = 1; x <= size * size; x++ ){
    const square = document.createElement("div");
    container.appendChild(square);
    square.setAttribute("id", "square");
    // dynamically change square size respect to pad size
    square.style.cssText = `width: ${960/size}px; height: ${960/size}px;`;
}

// prompt to get user input for pad size
btn.addEventListener("click", function(){
    let newSize = prompt("how many square you want per side (max 100)");
    if(parseInt(newSize) > 100){
        size = 16;
        alert("entered value is more than 100");
    }else {
        size = parseInt(newSize);
        const oldContainer = document.getElementById("container");
        oldContainer.remove();
        const container = document.createElement("div");
        body.appendChild(container);
        container.setAttribute("id", "container");
        for(let x = 1; x <= size * size; x++ ){
            const square = document.createElement("div");
            container.appendChild(square);
            square.setAttribute("id", "square");
            square.style.cssText = `width: ${960/size}px; height: ${960/size}px;`;
        }
    }
    console.log(size);
    
})
console.log(size);


