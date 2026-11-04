"use strict"

let userInNum = 1;
let numList = [];
let unique;

function displaySortedUniqueNumbers(){ 

    do{

        userInNum = prompt('Enter a number to be added');

        if(userInNum == "" || isNaN(userInNum)){

            alert("The value must not be alphabetical or empty!");

        }
        
        else{

            if (!numList.includes(userInNum)){

                numList.push(userInNum);

            }

            else{

                alert("Number has already been added!")
                unique = false;

            }

        }

    }
    while (unique != false);

    //Solution found at https://www.geeksforgeeks.org/javascript/how-to-sort-numeric-array-using-javascript/
    let sortedNumList = numList.sort((x, y) => Math.abs(x) - Math.abs(y));
    //

    for(let j = 0; j < sortedNumList.length; j++){

        let listItem = document.createElement("li");
        let listItemText = document.createTextNode(sortedNumList[j]);
        listItem.appendChild(listItemText);
        document.getElementById("numbers").appendChild(listItem);

    }
   
}