"use strict"

let votersArray = [];

function setCand(){

    votersArray = [];
    document.getElementById("winner").innerHTML = "";

    let candNum = prompt("How many candidates are there?");

    for (let h = 0; h < candNum; h++){

        let candName = prompt(`Input the name of candidate no ${(h+1)}.`);
        votersArray.push({name: candName.toLowerCase(), votes: 0});
      
    };

    setTable();

};

function setTable(){

    document.getElementById("winner").innerHTML = "";

    document.getElementById("voterArray").innerHTML = "";

    for (let j = 0; j < votersArray.length; j++){

        let row = document.getElementById("voterArray").insertRow(j);
        let labelCell = row.insertCell(0);
        let nameCell = row.insertCell(1);
        let votesCell = row.insertCell(2);

        labelCell.innerHTML = "Candidate " + (j + 1) + ":";
        nameCell.innerHTML = votersArray[j].name.charAt(0).toUpperCase() + votersArray[j].name.slice(1);
        votesCell.innerHTML = "Votes: " + votersArray[j].votes;

    };

    for (const cand of votersArray){

        if(cand.votes > 0){

            let winner = votersArray.toSorted((a, b) => {

                return b.votes - a.votes;

            });

            document.getElementById("winner").innerHTML = `The winner of the vote is: ${(winner[0].name.charAt(0).toUpperCase() + winner[0].name.slice(1))}!`;

        };

    };

};

function checkVotes(){
    
    if(votersArray == ""){

        alert("You need to set the available candidates in order to cast votes!")

    }

    else{

        for (let k = 0; k < votersArray.length; k++){

            votersArray[k].votes = 0;

        };

        let voterNum;

        do{

            voterNum = prompt("How many voters are there?")

            if(!isNaN(voterNum) || voterNum !== ""){

                for (let i = 0; i < voterNum; i++){

                    let userIn = prompt("Voter " + (i + 1) + ", enter a candidate number to vote for:");
                    if(userIn === ""){}

                    else if(votersArray[userIn - 1] !== undefined){

                        votersArray[userIn - 1].votes += 1;

                    }
                    
                    else{

                        alert("The voter index was not found on available voters!");
                        i--;

                    };

                };

            };

        }
        while(isNaN(voterNum) || voterNum === "");

        setTable();

    };

};

document.getElementById("vote").addEventListener("click", () => checkVotes())
document.getElementById("setCand").addEventListener("click", () => setCand())