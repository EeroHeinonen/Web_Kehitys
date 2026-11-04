"use strict"

let participants = "";
let participantsList = []

function displayNames(){ 

    do{

        if(isNaN(participants)){

            alert("The value must be a number!")

        }

        participants = prompt("How many participants are there?")

    }
    while (isNaN(participants))

    for(let i = 0; i < participants; i++){

        let userInName = prompt("Enter a name");
        let nameFin = userInName.charAt(0).toUpperCase() + userInName.slice(1);
        participantsList.push(nameFin);
        

    }

    let sortedParticipants = participantsList.sort();

    for(let j = 0; j < sortedParticipants.length; j++){

        let listItem = document.createElement("li");
        let listItemText = document.createTextNode(sortedParticipants[j]);
        listItem.appendChild(listItemText);
        document.getElementById("names").appendChild(listItem);

    }
   
}