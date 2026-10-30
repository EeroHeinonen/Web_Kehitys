const conf = confirm("Do you want to calculate square root?")

if(conf == true){

    var userInNum = prompt("Enter a number");

    if(userInNum <= 0){

        document.querySelector("#numbers").innerHTML = "The squareroot of a negative number can not be calculated.";

    }

    else{

        const result = Math.sqrt(+userInNum);

        if (isNaN(result)){

            alert("The value must be a number!");

        }

        else{

            document.querySelector("#numbers").innerHTML = "The square root of " + userInNum + " is " + result;

        }

    }

}

else{

    document.querySelector("#numbers").innerHTML = "The squareroot will not be calculated.";

}