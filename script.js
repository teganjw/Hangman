
function hangman(Categories){
    Categories = parseInt(Categories);
    console.log(Categories);

    if(Categories == 0){
        document.getElementById("output").innerHTML = "Select a Category";
    }

    var fruits = ["mango", "guava", "pear", "strawberry", "papaya"];
    var randFruit = fruits[Math.floor(Math.random() * fruits.length)];
    var animals = ["tiger", "muskrat", "orca", "starfish", "porcupine"];
    var randAnimal = animals[Math.floor(Math.random() * animals.length)];

    var pick = [0, randFruit, randAnimal];
    var result = pick[Categories];

    //for(var i=0; i<result.length; i++){


    //}

}