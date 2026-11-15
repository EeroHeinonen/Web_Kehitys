"use strict";

document.querySelector("input[type='submit']").addEventListener("click", (event) => {
    
    event.preventDefault();

    let userIn = document.querySelector("input[id='query']").value;
    search(userIn);

});

async function search(query){

    try{

        const proxy = "https://users.metropolia.fi/~ilkkamtk/proxy.php?url=";
        const search = "https://api.tvmaze.com/search/shows" + "?q=" + query;
        const url = proxy + encodeURIComponent(search);
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);

    }
    
    catch (error){

        console.log(error.message);

    };

}