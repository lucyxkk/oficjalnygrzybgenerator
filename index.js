let grzybki = ['Borowik szlachetny', 'Podgrzybek', 'Pieczarka', 'Kozlarz babka', 'Muhomor', 'Kurka', 'Maslak', 'Boczniak', 'Pieczarka portobello', 'Rydz', 'Huba'];
let length = grzybki.length;
let btnRandom = document.getElementById('przyciskGrzyb');
let result = document.querySelector('p')

function getGrzybki (grzybki) {
    let number = Math.floor(Math.random()*length);
    let result = grzybki[number];
    return result;
}

btnRandom.addEventListener('click', () => {
    let index = getGrzybki(grzybki);
    result.innerText = grzybki[index];
})

getGrzybki(grzybki);