var guesses = 10;
var result = "";
var guessedLetters = [];
var fruits = ["mango", "guava", "pear", "strawberry", "papaya", "orange", "persimmon", "coconut"];
var animals = ["tiger", "muskrat", "orca", "starfish", "porcupine", "aardvark", "squid"];
var countries = ["romania", "germany", "djibouti", "tanzania", "somalia", "uzbekistan", "mongolia"];

function hangman(Categories){

    var randFruit = fruits[Math.floor(Math. random() * fruits.length)];
    var randAnimal = animals[Math.floor(Math.random() * animals.length)];
    var randCountry = countries[Math.floor(Math.random() * countries.length)];

    var pick = [0, randFruit, randAnimal, randCountry];
    result = pick[Categories];

    var slots = "";
    if(Categories >=0) {
        for (var i = 0; i < result.length; i++) {
            slots = slots + " _"

        }
        document.getElementById("output").innerHTML = slots;
        document.getElementById("output1").innerHTML = "";
        document.getElementById("output2").innerHTML = "";
        document.getElementById("output3").innerHTML = "";
        guessedLetters = [];
        guesses = 10;
    }
    console.log(result);
}


function chooseLetter(letters) {
    letters = parseInt(letters);
    var alphabet = [0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    alphabet = alphabet[letters];
    if(letters>0) {
        var guessedAlready = guessedLetters.indexOf(alphabet)
        if (guessedAlready == -1) {
            guessedLetters.push(alphabet);
        }else{
            guesses--;}
    }
    var guessedIndex = result.search(alphabet);


    var slots = "";
    for (var i = 0; i < result.length; i++) {

        if (guessedLetters.indexOf(result[i]) > -1) {
            slots += result[i];
        }
        else {
            slots += "_ "
        }
    }

    var fullWord = slots.search("_");
    var guessedWord = document.getElementById("myField").value;
    document.getElementById("myField").value = "";
    guessedWord = guessedWord.toLowerCase();
    console.log(guessedWord);

    if(guessedWord != result && guessedWord != ""){
        guessedLetters.push(" Wrong Word Guessed");
        guesses--;
    }

    if (guesses > 0) {
        document.getElementById("output").innerHTML = slots;
        document.getElementById("output3").innerHTML = "Guessed Letters: " + guessedLetters;
        document.getElementById("output2").innerHTML = "Number of Guesses Left: " + guesses;
    } else {
        document.getElementById("output").innerHTML = "";
        document.getElementById("output1").innerHTML = "You Lose!";
        document.getElementById("output2").innerHTML = "The Word Was: " + result;
        document.getElementById("output3").innerHTML = "";
    }

    if (fullWord == -1 || guessedWord == result) {
        document.getElementById("output1").innerHTML = "You Win!!";
        document.getElementById("output").innerHTML = "";
        document.getElementById("output2").innerHTML = "";
        document.getElementById("output3").innerHTML = "";
    }

}




