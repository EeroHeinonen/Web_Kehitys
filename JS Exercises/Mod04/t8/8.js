"use strict";

document.getElementById("start").addEventListener("click", () => {

    let result;
    let option = document.getElementById("operation").value;

    let inp1 = document.getElementById("num1").value
    let inp2 = document.getElementById("num2").value

    if (option == "add"){

        result = +inp1 + +inp2;

    }

    else if (option == "sub"){

        result = +inp1 - +inp2;

    }

    else if (option == "multi"){
        
        result = +inp1 * +inp2;

    }

    else{

        result = +inp1 / +inp2;

    };

    document.getElementById("result").innerHTML = result.toString();

});