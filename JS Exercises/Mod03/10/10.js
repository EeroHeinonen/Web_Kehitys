"use strict"

let votersArray = [
  
    {
      name: "ellie",
      votes: 0,
    },
    {
      name: "frank",
      votes: 0,
    },
    {
      name: "pamela",
      votes: 0,
    }

];

function setTable() {

    document.getElementById("voterArray").innerHTML = "";

    for (let j = 0; j < votersArray.length; j++) {

        let row = document.getElementById("voterArray").insertRow(j);
        let labelCell = row.insertCell(0);
        let nameCell = row.insertCell(1);
        let votesCell = row.insertCell(2);

        labelCell.innerHTML = "Candidate " + (j + 1) + ":";
        nameCell.innerHTML = votersArray[j].name.charAt(0).toUpperCase() + votersArray[j].name.slice(1);
        votesCell.innerHTML = "Votes: " + votersArray[j].votes;

    }

}

function checkVotes(){

    for (let k = 0; k < votersArray.length; k++) {

        votersArray[k].votes = 0;

    };

    for (let i = 0; i < votersArray.length; i++) {

        let userIn = prompt("Voter " + (i + 1) + " enter a candidate number to vote for:");
        if (votersArray[userIn - 1] !== undefined) {

          votersArray[userIn - 1].votes += 1;

        }
        
        else {

          alert("The voter index was not found on available voters");
          i--;

        };

    };

    setTable();

};

setTable();

document.getElementById("vote").addEventListener("click", () => checkVotes())