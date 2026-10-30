const one = prompt("Write the first number");
const two = prompt("Write the second number");
const three = prompt("Write the third number");
const sum = +one + +two + +three;
const product = +one * +two * +three;
const avg = (+one + +two + +three) / 3;

document.querySelector("#numbers").innerHTML = "Sum: " + sum + "\n" + "Product: " + product + "\n" + "Average: " + avg + "\n";
