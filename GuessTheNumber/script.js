// Generera slumpmässigt tal mellan min och max
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Genererar ett slumpmässigt tal mellan 1 och 100
let number = randomNumber(1, 100);


// Funktion som hanterar användarens gissning
function guessNumber(userGuess) {
    let messageElement = document.getElementById('message');

    if (userGuess < number) {
        messageElement.innerText = "För lågt!";
        messageElement.style.color = "blue";
        setTimeout(function() {
            document.getElementById('user-guess').value = '';
        }, 1000); 
    } else if (userGuess > number) {
        messageElement.innerText = "För högt!";
        messageElement.style.color = "orange";
        setTimeout(function() {
            document.getElementById('user-guess').value = '';
        }, 1000); 
    } else if (userGuess == number) {
        messageElement.innerText = "Grattis, du gissade rätt!";
        messageElement.style.color = "green";
        messageElement.style.fontSize = "2rem";
    }
}


// Eventlistener för Gissa-knappen
let guessButton = document.getElementById('guess-button');

guessButton.addEventListener('click', makeGuess);


// Räknare för antal gissningar 
let guessCount = 0;


// Funktion som hanterar en gissning
function makeGuess() {
    let userGuess = document.getElementById('user-guess').value;
    guessCount++; // Öka antalet gissningar
    document.getElementById('guess-count').innerText = guessCount;
    guessNumber(userGuess);
}


// Eventlistener för Enter-knappen
let userGuessInput = document.getElementById('user-guess');

userGuessInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        makeGuess();
    }
});


// Funktion för att nollställa spelet
let resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', resetCounter);

function resetCounter() {
    guessCount = 0;
    document.getElementById('guess-count').innerText = "0";
    document.getElementById('user-guess').value = '';
    document.getElementById('message').innerText = '';
};

