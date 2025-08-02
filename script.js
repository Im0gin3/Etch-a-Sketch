const container = document.querySelector(".container");
const button = document.querySelector("#changeSquares");
let numberSquares=16;


button.addEventListener("click", ()=>{
    numberSquares=prompt("How many squares do you want per side in the new grid?");
    while (numberSquares>100){
        numberSquares=prompt("How many squares do you want per side in the new grid?");
    }
    document.querySelectorAll(".square").forEach(el => el.remove());
    let width = 100/numberSquares;
    for (let outer=0;outer<numberSquares;outer++){
    for (let inner=0;inner<numberSquares;inner++){
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
        div.style.cssText=`width: ${width}vw; height: ${width}vw;`;
    }
    document.querySelectorAll(".square").forEach((div) => {
    div.onmouseover = (event) => {
    div.classList.add("hovering");
  }
})
}
})
for (let outer=0;outer<numberSquares;outer++){
    for (let inner=0;inner<numberSquares;inner++){
        const div = document.createElement("div");
        div.classList.add("square")
        container.appendChild(div);
    }
}
document.querySelectorAll(".square").forEach((div) => {
  div.onmouseover = (event) => {
    div.classList.add("hovering");
  }
})