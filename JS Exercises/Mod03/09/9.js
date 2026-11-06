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

        for (const num of originalNumberArray){

            let li = document.createElement("li");
            li.appendChild(document.createTextNode(num));
            document.getElementById("numbers").appendChild(li);

            if(parseInt(num) % 2 === 0){

                newNumbers.push(num);
                let li2 = document.createElement("li");
                li2.appendChild(document.createTextNode(num));
                document.getElementById("newNumbers").appendChild(li2);

            };

        };

        document.getElementById("originalArray").innerHTML = "Original array: [" + originalNumberArray + "]";
        document.getElementById("originalArrayTitle").hidden = false;

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

    let result = even(numbers);

    if(result == true){

        alert("The input must be numerical!")
        document.getElementById("newArrayTitle").hidden = true;
        document.getElementById("originalArrayTitle").hidden = true;
        document.getElementById("newArray").innerHTML = "";
        document.getElementById("originalArray").innerHTML = "";

    }

    else if(result.new != ""){

        document.getElementById("newArrayTitle").hidden = false;
        document.getElementById("originalArrayTitle").hidden = false;
        document.getElementById("newArray").innerHTML = "New array: [" + result.new + "]";
        console.log("Original Array: [" + result.original + "]")
        console.log("New Array: [" + result.new + "]")

    }

    else{

        document.getElementById("newArray").innerHTML = "No even numbers found!";
        document.getElementById("newArrayTitle").hidden = true;

        if(result.original != undefined){
            
            console.log("Original Array: [" + result.original + "]")

        }

    }

    document.getElementById("userIn").value = "";

});