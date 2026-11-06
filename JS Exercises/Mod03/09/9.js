"use strict"

function even(originalNumbers){

    let newNumbers = [];
    let originalNumberArray;

    document.getElementById("numbers").innerHTML = "";
    document.getElementById("newNumbers").innerHTML = "";
    document.getElementsByClassName("newArray").innerHTML = "";

    if(originalNumbers.replace(/\s/g, "") != ""){

        originalNumberArray = originalNumbers.replace(/\s/g, "").split(/,/)

        for (const checkForABC of originalNumberArray){

            if(isNaN(checkForABC)){

                return true;

            };

        };

        document.getElementById("originalArray").innerHTML = "Original array: [" + originalNumberArray + "]";
        document.getElementById("originalArrayTitle").hidden = false;

        for (const num of originalNumberArray){

            let li = document.createElement("li");
            let tn = document.createTextNode(num);
            li.appendChild(tn);
            document.getElementById("numbers").appendChild(li);

        };
        
        for (const number of originalNumberArray){

            if(parseInt(number) % 2 === 0){

                newNumbers.push(number);
                let li = document.createElement("li");
                let evenNumber = document.createTextNode(number);
                li.appendChild(evenNumber);
                document.getElementById("newNumbers").appendChild(li);

            };

        };

    }

    else{

        document.getElementById("originalArray").innerHTML = "No numbers found!";
        document.getElementById("newArrayTitle").hidden = true;
        document.getElementById("originalArrayTitle").hidden = true;

    }

    return {

        original: originalNumberArray, 
        new: newNumbers

    };  

};

document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault();

    console.clear();

    let numbers = document.getElementById("userIn").value;

    if(even(numbers) == true){

        alert("The input must be numerical!")
        document.getElementById("newArrayTitle").hidden = true;
        document.getElementById("originalArrayTitle").hidden = true;
        document.getElementById("newArray").innerHTML = "";
        document.getElementById("originalArray").innerHTML = "";

    }

    else if(even(numbers).new != ""){

        document.getElementById("newArrayTitle").hidden = false;
        document.getElementById("originalArrayTitle").hidden = false;
        document.getElementById("newArray").innerHTML = "New array: [" + even(numbers).new + "]";
        console.log("Original Array: [" + even(numbers).original + "]")
        console.log("New Array: [" + even(numbers).new + "]")

    }

    else{

        document.getElementById("newArray").innerHTML = "No even numbers found!";
        document.getElementById("newArrayTitle").hidden = true;

        if(even(numbers).original != undefined){
            
            console.log("Original Array: [" + even(numbers).original + "]")

        }

    }

    document.getElementById("userIn").value = "";

});