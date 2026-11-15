"use strict";

const resultP = document.querySelector("p[id='result']");

document.querySelector("button[id='submit']").addEventListener("click", () => {

    search();

});

async function search(){

    try{

        const proxy = "https://users.metropolia.fi/~ilkkamtk/proxy.php?url=";
        const search = "https://api.chucknorris.io/jokes/random";
        const url = proxy + encodeURIComponent(search);
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData.value);

    }
    
    catch (error){

        console.log(error.message);

    };

};