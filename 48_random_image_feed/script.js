const container = document.querySelector('.container');
const randomImageURL = 'https://picsum.photos/'; // alternative => https://unsplash.it/
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${randomImageURL}${getRandomSize()}?random`;
    container.appendChild(img);
}

function getRandomSize() {
    return `${getRandomNumber()}/${getRandomNumber()}`;
}

function getRandomNumber() {
    // Generate a random number between 0 and 9.
    // Then add 300 to it to get a random number between 300 and 309.
    return Math.floor(Math.random() * 10) + 300;
}
