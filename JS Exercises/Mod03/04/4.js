"use strict"

let userInNum = 1;
let numList = []

function displaySortedNumbers(){ 

    do{

        userInNum = prompt('Enter a number to be added or "0" to quit');

        if(userInNum == "" || isNaN(userInNum)){

            alert("The value must not be alphabetical or empty!")

        }
        
        else{

            numList.push(userInNum);

        }

    }
    while (userInNum == "" || userInNum != 0 || isNaN(userInNum))

    numList.pop();

    //Solution found at https://www.geeksforgeeks.org/javascript/how-to-sort-numeric-array-using-javascript/
    let sortedNumList = numList.sort((x, y) => Math.abs(x) - Math.abs(y)).reverse();
    //

    for(let j = 0; j < sortedNumList.length; j++){

        let listItem = document.createElement("li");
        let listItemText = document.createTextNode(sortedNumList[j]);
        listItem.appendChild(listItemText);
        document.getElementById("numbers").appendChild(listItem);

    }
   
}