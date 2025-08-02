const container = document.querySelector(".container");
for (let outer=0;outer<16;outer++){
    for (let inner=0;inner<16;inner++){
        const div = document.createElement("div");
        div.classList.add("square")
        container.appendChild(div);
    }
}