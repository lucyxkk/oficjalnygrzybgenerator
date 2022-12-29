let grzybki = ['Borowik szlachetny', 'Podgrzybek', 'Pieczarka', 'Kozlarz babka', 'Muhomor', 'Kurka', 'Maslak', 'Boczniak', 'Pieczarka portobello', 'Rydz', 'Huba'];
let length = grzybki.length;
let btnRandom = document.querySelector('button');
let result = document.querySelector('p')

function getGrzybki() {
    let number = Math.floor(Math.random()*length);
    let result = grzybki[number];
    document.querySelector(".grzyb-random").textContent = result;
}

document.querySelector("button").addEventListener("click", function () {
    let music = new Audio("muzykagrzybow.mp4");
    music.play();
})
        