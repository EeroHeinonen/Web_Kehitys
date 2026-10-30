const start = prompt("Enter the starting year");
const end = prompt("Enter the ending year");

var list = document.getElementById("years");

if (isNaN(end) || isNaN(start) || end == "" || start == "") {

    alert("Both values must be numbers!");

}

else{

    if (+end > +start){

        for (let year = +start; year <= +end; year++) {

            if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){

                var li = document.createElement("li");
                var yearText = document.createTextNode(year);
                li.appendChild(yearText);
                list.appendChild(li);

            }

        }

    }

    else{

        alert("The end year must be greater than the start year!")

    }
    
}