"use strict"

function arrayAdd(names){

    let originalArray;
    let fullString = "";

    document.getElementById("names").innerHTML = "";
    document.getElementsByClassName("array").innerHTML = "";

    if(names.replace(/\s/g, "") != ""){

        originalArray = names.replace(/\s/g, "").split(/,/)

        for (const name of originalArray){

            let li = document.createElement("li");
            li.appendChild(document.createTextNode(name));
            document.getElementById("array").appendChild(li);

        }

        for (let i = 0; i < originalArray.length; i++){

            fullString += originalArray[i];

        };

        document.getElementById("string").innerHTML = fullString;
        document.getElementById("array").innerHTML = "[" + originalArray + "]";
        document.getElementById("arrayTitle").hidden = false;

    }

    else{

        document.getElementById("string").innerHTML = "User input was empty!";
        document.getElementById("array").innerHTML = "";
        document.getElementById("arrayTitle").hidden = true;
    }

};

document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault();

    arrayAdd(document.getElementById("userIn").value);

    document.getElementById("userIn").value = "";

});