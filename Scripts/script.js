let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d");
let box = 32;

function CriarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

CriarBG();