const times = prompt("How many times would you like to roll the dice?");
var total = 0;

var table = document.getElementById("dices");

for (let i = 0; i < times; i++) {

    var row = table.insertRow(i);
    row.innerHTML = "Dice " + (i+1) + ":";
    var cell = row.insertCell(0);
    var dice = Math.floor(Math.random() * 6) + 1;
    total += dice;
    cell.innerHTML = dice;

}

document.querySelector("#numbers").innerHTML = "The total of the dices is " + total;
