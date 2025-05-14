const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
    if (target.value.length > 1){
        button.removeAttribute('disabled');  /* ativa/desativa o botao */
        return;
    }
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem('player', input.value);  /* vai para o jogo */
    window.location = 'pages/game.html';
    
}


input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);


document.getElementById("btnVoltar").addEventListener("click", (event)=>{
    event.preventDefault();
    window.location.href="pages/menu.html";
}); /* volta para o menu */