//GLOBAL VARIABLES
//====================================================================================
// Data Holders
var wordbank = ["freddy","jason", "redrum", "xenomorph", "cenobite", "necronomicon", "tuttifrutti", "elvira", "romero", "pazuzu", "regan", "witch"];
var currentWord = "";
var wordLetters = [];
var blanks = 0;
var blanksGuesses = []; //e _ _ _ _ _
var wrongGuesses = [];

// Counters
var wins = 0;
var guesses = 6;

// Tests
// console.log(wordbank);
// console.log(guesses);


//FUNCTIONS
//====================================================================================

function startGame () {
    currentWord = wordbank[Math.floor(Math.random() * wordbank.length)];
    wordLetters = currentWord.split("");
    blanks = wordLetters.length;

    // Resets
    guesses = 6;
    wrongGuesses = [];
    blanksGuesses = [];

    // populate blanks and successes w/ correct # of blanks
    for (var i = 0; i < blanks; i++) {
        blanksGuesses.push("_");
        
    }

    // alter DOM
    document.getElementById("currentWord").innerHTML = blanksGuesses.join("  ");
    document.getElementById("guessesLeft").innerHTML = guesses;
    // document.getElementById("lettersGuessed").innerHTML = wrongGuesses;
    document.getElementById("wins").innerHTML = wins;

    // Testing
    console.log(currentWord);
    console.log(wordLetters);
    console.log(blanks);
    console.log(blanksGuesses); //WOOT!
}

function checkLetters(letter) {
    // check if letter exists in word
    // alert(letter);
    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if(currentWord[i] == letter) {
            letterInWord = true;
            // alert("letter found");
        }
        
    }
    // find where in word letter is, then populate blanksGuesses
    if(letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if(currentWord[i] == letter) {
                blanksGuesses[i] = letter;
            }
        }
    }

    else {
        wrongGuesses.push(letter);
        guesses--;
    }
}

function roundOver() {
    console.log("Win Count: " + wins + " | Guesses Left " + guesses)

    document.getElementById("guessesLeft").innerHTML = guesses;
    document.getElementById("currentWord").innerHTML = blanksGuesses.join("  ");
    document.getElementById("lettersGuessed").innerHTML = wrongGuesses.join("  ");

    if (wordLetters.toString() == blanksGuesses.toString()) {
        wins++;
        alert("You Survived!");

        document.getElementById("wins").innerHTML = wins;
        startGame()
    }

    else if (guesses == 0) {
        alert("Trouble Breathing?");
        startGame();
    }
}

//MAIN PROCESS(Call Functions To Do Things)
//====================================================================================

// initiate code first time
startGame ();

// register key clicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    checkLetters(letterGuessed);
    roundOver();
    
    // testing
    console.log(letterGuessed);
}
