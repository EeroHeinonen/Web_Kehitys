var house = Math.floor(Math.random() * 4) + 1;
const name = prompt("Input your name");
const nameFin = name.charAt(0).toUpperCase() + name.slice(1);
var housename = "";

if(house == 1){

    housename = "Gryffindor"

}

else if(house == 2){

    housename = "Hufflepuff"

}

else if(house == 3){

    housename = "Slytherin"

}

else{

    housename = "Ravenclaw"

}

document.querySelector("#numbers").innerHTML = nameFin + " you are a " + housename + "!";