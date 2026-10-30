const year = prompt("Enter a year")

if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){

    document.querySelector("#numbers").innerHTML = year + " is a leap year!"

}

else{

    document.querySelector("#numbers").innerHTML = year + " is not a leap year!"

}