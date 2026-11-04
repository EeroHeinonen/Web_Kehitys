"use strict"

let i = 0;
let dice;

function rollDice(){
    
    document.getElementById("rolls").innerHTML = ""

    do{

        dice = Math.floor(Math.random() * 6) + 1;
        var li = document.createElement("li");
        var diceRoll = document.createTextNode(dice);
        li.appendChild(diceRoll);
        li.setAttribute("id", "roll")
        document.getElementById("rolls").appendChild(li);
        i = i + 1

    }
    while (dice != 6)
    document.getElementById("diceValue").innerText = `A 6 roll was achieved in ${i} rolls!`;
    i = 0;

}

document.getElementById("dice").addEventListener("click", rollDice);