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
        setTimeout(function() {
            document.getElementById("user-guess").value = '';
        }, 1000); 
    } else if (userGuess > number) {
        messageElement.innerText = "För högt!";
        setTimeout(function() {
            document.getElementById("user-guess").value = '';
        }, 1000); 
    } else if (userGuess == number) {
        messageElement.innerText = "Grattis, du gissade rätt!";
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

userGuessInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        makeGuess();
    }
});


