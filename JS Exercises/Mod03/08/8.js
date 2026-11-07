"use strict"

function concat(names){

    let originalArray;
    let fullString = "";

    document.getElementsByClassName("string").innerHTML = "";
    document.getElementsByClassName("array").innerHTML = "";

    if(names.replace(/\s/g, "") != ""){

        originalArray = names.replace(/\s/g, "").split(/,/)

        for (const name of originalArray){

            let li = document.createElement("li");
            li.appendChild(document.createTextNode(name));
            document.getElementById("array").appendChild(li);

        }

        for (let i = 0; i < originalArray.length; i++){

            fullString += originalArray[i].toString();

        };

        return{

            string: fullString,
            original: originalArray

        };
a
    }

    else{
        
        return true;

    }

};

document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault();

    console.clear();

    let result = concat(document.getElementById("userIn").value);

    document.getElementById("userIn").value = "";

    if(result == true) {

        document.getElementById("stringTitle").hidden = true;
        document.getElementById("string").innerHTML = "User input was empty!";
        document.getElementById("array").innerHTML = "";
        document.getElementById("arrayTitle").hidden = true;

    }

    else{

        document.getElementById("stringTitle").hidden = false;
        document.getElementById("string").innerHTML = result.string;
        document.getElementById("array").innerHTML = `[${result.original}]`;
        document.getElementById("arrayTitle").hidden = false;

        console.log(`String: ${result.string}`);
        console.log(`Array: [${result.original}]`);

    };

});