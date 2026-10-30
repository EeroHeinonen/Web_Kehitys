const num = prompt("Enter a number: ")

if (num <= 1){

    document.querySelector("#numbers").innerHTML = "The number is not a prime!";

}

else{

    var prime = true;

    for (let i = 2; i <= Math.sqrt(num); i++){

        if (num % i === 0){

            prime = false;
            document.querySelector("#numbers").innerHTML = "The number is not a prime!";
            break;

        }
        
    }
    
    if (prime == true){

        document.querySelector("#numbers").innerHTML = "The number is a prime!";

    }
}