let number = Math.floor(Math.random() * 100) + 1;

const btn = document.querySelector('.btn').addEventListener('click', () => {
    const btn = document.querySelector('.btn');

    const input = document.querySelector('#choose-input').value;

    if (input == number) {
        btn.classList.add('btn-right');
        btn.innerHTML = "Acertou!"
        document.querySelector('.btn-sort').style.display = 'block';
        party.confetti(btn);
    } else {
        btn.classList.add('btn-wrong');
        btn.innerHTML = 'Você errou!';
    }        

    const interval = setInterval(() => {
        btn.classList.remove('btn-wrong');
        btn.classList.remove('btn-right');
        btn.innerHTML = 'Jogar novamente';
        clearInterval(interval);
    }, 2000);

});

document.querySelector('.btn-sort').addEventListener('click', () => {
    number = Math.floor(Math.random() * 100) + 1;
    document.querySelector('.btn-sort').style.display = 'none';
    console.log(number);
});