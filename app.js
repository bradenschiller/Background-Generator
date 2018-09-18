let content = document.getElementById("content");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

let body = document.querySelector("body");

function changeBackground() {
    body.style.background = 
    "linear-gradient(to right, " +
    input1.value +
    ", " +
    input2.value +
    ")"

    content.textContent = body.style.background + ";"
}


input1.addEventListener("change", changeBackground)

input2.addEventListener("change", changeBackground)


