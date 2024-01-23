const ranNum = Math.floor(Math.random() * 100+1);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowerHi = document.querySelector('#anything');
const p = document.createElement('p');
const startOver = document.querySelector('.result');
let prevGuess = []; // represent the set of previous guesses
let numGuess = 1; // represent number of guesses
let playGame = true;
if(playGame){
    submit.addEventListener('click', function(e){ 
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
    

};

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Invalid guess");
    }else if(guess < 0){
        alert("Guess must be between 1 and 100");
    }else if(guess > 100){
        alert("Guess must be between 1 and 100");
    }else{
        prevGuess.push(guess);
        if( numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over! Number was ${ranNum}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }

    }
};

function checkGuess(guess) {
    if(guess === ranNum){
        displayMessage(`Correct! You guessed it right!!`);
        endGame();
    }else if(guess < ranNum){
        displayMessage(`Too Low! Try again!`);
    }else if(guess > ranNum){
        displayMessage(`Too High! Try again!`);
    }
};

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;

};

function displayMessage(message) {
    lowerHi.innerHTML = `<h2>${message}</h2>`
};

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = "<h2 id='nGame'>Start New Game</h2>"
    playGame = false;
    startOver.appendChild(p);

    startGame();
    

};

function startGame() {
    const nGame = document.querySelector('#nGame');
    nGame.addEventListener('click', (e) => {
        e.preventDefault();
        playGame = true;
        numGuess = 1;
        prevGuess = [];
        guessSlot.innerHTML = '';
        lowerHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        userInput.value = '';
        p.innerHTML = '';
        startOver.removeChild(p);
    })

};







