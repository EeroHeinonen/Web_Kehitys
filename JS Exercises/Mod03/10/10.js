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
  },
];

for(let j = 0; j < votersArray.length; j++){

    let row = document.getElementById("voterArray").insertRow(j);
    row.innerHTML = "Candidate " + (j+1) + ":";
    let cell = row.insertCell(0);
    cell.innerHTML = "Votes: 0";
    let cell2 = row.insertCell(0);
    cell2.innerHTML = votersArray[j].name.charAt(0).toUpperCase() + votersArray[j].name.slice(1);

}

function checkVotes(){

    document.getElementById("voterArray").innerHTML = ""

    for(let i = 0; i < votersArray.length; i++){

        let userIn = prompt("Voter " + (i+1) + " enter a candidate number to vote for ");
        if(votersArray[userIn-1] !== undefined) {

            votersArray[userIn-1].votes += 1
            console.log(votersArray[userIn-1].votes)
            let row = document.getElementById("voterArray").insertRow(i);
            row.innerHTML = "Candidate " + (i+1) + ":";
            let cell = row.insertCell(0);
            cell.innerHTML = votersArray[userIn-1].votes;
            let cell2 = row.insertCell(0);
            cell2.innerHTML = votersArray[i].name.charAt(0).toUpperCase() + votersArray[i].name.slice(1);

            
        }

        else{

            alert("The voter index was not found on available voters")

        }

    }

};

document.getElementById("vote").addEventListener("click", () => checkVotes())