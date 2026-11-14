function printName(first, last){

    firstCap = first.charAt(0).toUpperCase() + first.slice(1)
    lastCap = last.charAt(0).toUpperCase() + last.slice(1)

    document.querySelector("p[id='target']").innerHTML = `Your name is ${firstCap} ${lastCap}`;

};

document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault();

    let fname = document.querySelector("input[name='firstname']").value.toString();
    let lname = document.querySelector("input[name='lastname']").value.toString();

    printName(fname, lname);

});