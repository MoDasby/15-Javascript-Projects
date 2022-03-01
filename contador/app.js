let counter = 0;
const counterNumber = document.querySelector('#counter-number-value');

function checkCounter() {
    if (counter > 0) {
        counterNumber.style.color = 'green';
    } else if (counter < 0) {
        counterNumber.style.color = 'red';
    } else if (counter === 0) {
        counterNumber.style.color = 'black';
    }
}

document.querySelector('#add').addEventListener('click', () => {
    counter++;
    counterNumber.innerHTML = counter;
    checkCounter();
});

document.querySelector('#remove').addEventListener('click', () => {
    counter--;
    counterNumber.innerHTML = counter;
    checkCounter();
});

document.querySelector('#clean').addEventListener('click', () => {
    counter = 0;
    counterNumber.innerHTML = counter;
    checkCounter();
});