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

    // Testing
    console.log(currentWord);
    console.log(wordLetters);
    console.log(blanks);
    console.log(blanksGuesses); //WOOT!
}

//MAIN PROCESS(Call Functions To Do Things)
//====================================================================================
startGame ();
