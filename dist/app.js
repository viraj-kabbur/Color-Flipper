const colors = ['red', 'green', 'blue', 'yellow', 'violet', 'indigo', 'teal', 'tan', 'darkkhaki']

const btn = document.getElementById("btn");
const color = document.querySelector("#color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}