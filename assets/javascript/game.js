//GLOBAL VARIABLES
//====================================================================================
// Data Holders
var wordbank = ["freddy","jason", "redrum", "xenomorph", "cenobite", "necronomicon", "tuttifrutti", "elvira", "romero", "pazuzu", "regan", "witch"];
var currentWord = "";
var wordLetters = [];
var blanks = 0;
var blanksGuesses = [];
var wrongGuesses = [];

// Counters
var wins = 0;
var guesses = 6;

// Tests
console.log(wordbank);
console.log(guesses);


//FUNCTIONS
//====================================================================================

function startGame () {
    currentWord = wordbank[Math.floor(Math.random() * wordbank.length)];

    // Testing
    console.log(currentWord);
}

//MAIN PROCESS(Call Functions To Do Things)
//====================================================================================
startGame ();
