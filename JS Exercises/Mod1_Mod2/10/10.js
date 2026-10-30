const dices = prompt("How many dice would you like to roll?");
const target = prompt("What is the target sum of rolls?");
var chance = 0
var diceSum = 0
var dice = 0

for (let i = 0; i < 1000000; i++) {

    for (let x = 0; x < +dices; x++){

        dice = Math.floor(Math.random() * 6) + 1;
        diceSum = diceSum + dice;

    }

    if(diceSum === +target){

        chance += 1;
    
    }

    diceSum = 0

}

var finalChance = ((chance / 1000000) * 100).toFixed(2);

document.querySelector("#numbers").innerHTML = "The chance for a " + target + " roll while rolling " + dices + " dice(s) is " + finalChance + "%";