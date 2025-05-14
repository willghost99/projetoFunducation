const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

// criando dicionario para as cartas
const items = [
    'iconRecicle',
    'lataMadeira',
    'lataMetal',
    'lataPapel',
    'lataPlastico',
    'lataVidro',
    
]

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

//verificando se o jogo acabou
const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 12) { setTimeout(() => {
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Você descobriu todas as cartas em ${timer.innerHTML} segundos! Vamos ver o que elas significam?`);
        window.location.href = '../pages/explicacao.html';
    }, 500);
}
}

// verificando se as cartas são iguais
const checkCards = () => {
    const firstItem = firstCard.getAttribute('data-item');
    const secondItem = secondCard.getAttribute('data-item');

    if (firstItem === secondItem) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');
        firstCard = '';
        secondCard = '';

        checkEndGame();


    } else {

        setTimeout(() => {
 
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');
        firstCard = '';
        secondCard = '';

    }, 500);

}
}
const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')){
        return;
    }

    if (firstCard === ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard === ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
    

}

//criando as cartas
const createCard = (items) =>{
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${items}.png')`;



    card.appendChild(front);
    card.appendChild(back);

    card.setAttribute('data-item', items);
    card.addEventListener('click', revealCard);
    return card;
}

// carregando a tela do jogo (embaralha as cartas e coloca na tela)
const loadGame = () => {

    const duplicateItems = [ ... items, ...items ];

    const shuffledArray = duplicateItems.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((items) =>{
        
        const  card = createCard(items);
        grid.appendChild(card);

    });
}

const startTimer = () => {
    this.loop = setInterval(() => {

        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000)


}

window.onload = () => {
    
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
}
