'use strict';

const names = ['John', 'Paul', 'Jones'];

for (let i = 0; i < names.length; i++) {

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(names[i]));
    document.getElementById("target").appendChild(li);
    
};