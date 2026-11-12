"use strict";

document.getElementById("trigger").addEventListener("mouseover", () => {

    document.getElementById("target").setAttribute("src", "img/picB.jpg")

});

document.getElementById("trigger").addEventListener("mouseout", () => {

    document.getElementById("target").setAttribute("src", "img/picA.jpg")

});