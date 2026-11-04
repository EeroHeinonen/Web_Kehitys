"use strict"

let userInDogName;
let dogList = []

function dogNames(){ 

    for(let i = 1; i <= 6; i++){

        do{

            if(userInDogName == "" || !isNaN(userInDogName)){

                alert("The value must not be numerical or empty!")

            }

            userInDogName = prompt("Enter a name for dog number " + i + ".");

        }
        while (userInDogName == "" || !isNaN(userInDogName))

        let nameFin = userInDogName.charAt(0).toUpperCase() + userInDogName.slice(1);
        dogList.push(nameFin);

    }

    let sortedDogList = dogList.sort().reverse();

    for(let j = 0; j < sortedDogList.length; j++){

        let listItem = document.createElement("li");
        let listItemText = document.createTextNode(sortedDogList[j]);
        listItem.appendChild(listItemText);
        document.getElementById("dogNames").appendChild(listItem);

    }
   
}