"use strict"

let diceSides = parseInt(prompt("How many sides does the dice have?"))

let counter = 0;
let dice;

function rollDice(diceSize){
    
    document.getElementById("rolls").innerHTML = ""
    counter = 0;
    dice = 0;

    do{

        dice = Math.floor(Math.random() * diceSize) + 1;
        let li = document.createElement("li");
        let diceRoll = document.createTextNode(dice);
        li.appendChild(diceRoll);
        document.getElementById("rolls").appendChild(li);

        counter += 1

    }
    while(dice != diceSize)

    document.getElementById("diceValue").innerText = `A ${diceSize} roll was achieved in ${counter} rolls!`;

    return dice

}

document.getElementById("dice").addEventListener("click", () => concat());