let joes = document.getElementById("joes");
let joesImg = document.getElementById("joesImg");

joes.addEventListener("mouseover", () => {
    joesImg.src = "img/Joes.gif";
});

joes.addEventListener("mouseout", () => {
    joesImg.src = "img/Joes.png";
});