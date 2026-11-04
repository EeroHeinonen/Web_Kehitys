"use strict"

let diceSize = prompt("How many sides does the dice have?")

let i = 0;
let dice;

function rollDice(diceSize){
    
    document.getElementById("rolls").innerHTML = ""

    for(let i = 0; dice != diceSize; i++){

        dice = Math.floor(Math.random() * diceSize) + 1;
        var li = document.createElement("li");
        var diceRoll = document.createTextNode(dice);
        li.appendChild(diceRoll);
        li.setAttribute("id", "roll")
        document.getElementById("rolls").appendChild(li);

    }

    dice = 0;

}

document.getElementById("diceValue").innerText = `A ${diceSize} roll was achieved in ${i} rolls!`;

document.getElementById("dice").addEventListener("click", rollDice());