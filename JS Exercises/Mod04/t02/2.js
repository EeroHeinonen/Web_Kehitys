"use strict";

for (let i = 0; i < 3; i++) {

    let text;

    let li = document.createElement("li");
    if (i === 0){

        text = "First item";
        
    }

    else if (i === 1){
        
        text = "Second item";
        
        li.setAttribute("class", "my-item")

    }

    else{

        text = "Third item";

    };

        li.appendChild(document.createTextNode(text));
        document.getElementById("target").appendChild(li);
    
};