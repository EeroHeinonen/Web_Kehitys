"use strict";

document.getElementById("start").addEventListener("click", () => {

    let userIn = document
        .getElementById("calculation")
        .value.replace(/\s/g, "")
        .split(/([/*\-+])/)
        .filter(Boolean);

    for (let i = 0; i < userIn.length; i++) {
        
        if (userIn[i] === "-" && (i === 0 || ["+", "-", "*", "/"].includes(userIn[i - 1]))) {

            userIn.splice(i, 2, "-" + userIn[i + 1]);

        };

    };

    for(let i = 0; i < userIn.length; i++){

        if (userIn[i] === "*" || userIn[i] === "/"){

            let calc = userIn[i] === "*" ? userIn[i - 1] * userIn[i + 1] : userIn[i - 1] / userIn[i + 1];

            userIn.splice(i - 1, 3, calc);
            i--;

        };

    };

    let result = Number(userIn[0]);

    for (let i = 1; i < userIn.length; i += 2) {

        result = userIn[i] === "+" ? result += +userIn[i+1] : result -= +userIn[i+1];

    };

    document.getElementById("result").innerHTML = result;

});