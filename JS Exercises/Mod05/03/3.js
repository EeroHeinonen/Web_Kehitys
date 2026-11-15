"use strict";

const resultDiv = document.querySelector("div[id='results']");

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

        resultDiv.innerHTML = "";

        for(const item of jsonData){

            let showArticle = document.createElement("article");

            let showName = document.createElement("h2");
            showName.innerHTML = item.show.name;
            showArticle.appendChild(showName);

            let showImage = document.createElement("img");
            showImage.setAttribute("src", item.show.image?.medium);
            showImage.setAttribute("alt", item.show.name);

            showImage.addEventListener("click", () => {

                window.open(item.show.url, "_blank");

            });
            
            showImage.style.cursor = 'pointer';
            showArticle.appendChild(showImage);

            let showSummary = document.createElement("div");
            showSummary.innerHTML = item.show.summary;
            showArticle.appendChild(showSummary);

            resultDiv.appendChild(showArticle);

        }

    }
    
    catch (error){

        console.log(error.message);

    };

};