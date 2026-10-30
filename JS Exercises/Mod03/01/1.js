"use strict"

const nums = [];
const numsReverse = [];

function reverseNumbers(){

    for(let i = 0; i < 5; i++){

        let userInNum = prompt("Enter a number");
        nums.push(userInNum)
        let row = document.getElementById("numbers").insertRow(i);
        row.innerHTML = "Number " + (i+1) + ":";
        let cell = row.insertCell(0);
        cell.innerHTML = nums[i];

    }

    let originalLength = nums.length

    for( let j = 0; j < originalLength; j++){

        numsReverse.push(nums.pop())
        let row = document.getElementById("numbersReverse").insertRow(j);
        row.innerHTML = "Number " + (j+1) + ":";
        let cell = row.insertCell(0);
        cell.innerHTML = numsReverse[j];

    }
   
}