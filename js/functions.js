

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

document.querySelector('#noppa img').addEventListener('click', () => {
    const randomNumber = getRandomIntNumberInRange(1, 6);
    const image = document.querySelector('#noppa img');

    image.src = `./images/${randomNumber}.png`;
    
})