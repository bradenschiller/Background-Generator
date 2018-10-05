const content = document.getElementById("content");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const body = document.querySelector("body");

const changeBackground = () => {
    body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`
    content.textContent = `${body.style.background};`
}

input1.addEventListener("change", changeBackground)
input2.addEventListener("change", changeBackground)


