"use strict";

const resultDiv = document.querySelector("div[id='results']");

document.querySelector("input[type='submit']").addEventListener("click", (event) => {

    event.preventDefault();

    let userIn = document.querySelector("input[id='query']").value.trim();
    search(userIn);

});

async function search(query){

    if(query.length >= 3){

        try{

            const proxy = "https://users.metropolia.fi/~ilkkamtk/proxy.php?url=";
            const search = "https://api.chucknorris.io/jokes/search?query=" + encodeURIComponent(query);
            const url = proxy + encodeURIComponent(search);
            const response = await fetch(url);
            const jsonData = await response.json();

            resultDiv.innerHTML = "";

            if (jsonData.result.length == 0){

                resultDiv.innerHTML = `No jokes found with the query "${query}".`

            }

            else{

                for(const item of jsonData.result){

                    let jokeArticle = document.createElement("article");
                    let jokeParagraph = document.createElement("p");

                    jokeParagraph.innerHTML = item.value;
                    jokeArticle.appendChild(jokeParagraph);
                    resultDiv.appendChild(jokeArticle);

                }

            };

        }
        
        catch (error){

            console.log(error.message);

        };

    }

    else{

        resultDiv.innerHTML = "Search query too short, please use a minimum of three letters."

    };

};