//Declares variables
let x = Number(prompt("Enter a number"))
let y = Number(prompt("Enter a second number"))
let summedNumbers = 0

//Function to sum two numbers
function calculate(num1, num2){
let summedNumbers = (num1 + num2)
return summedNumbers
}

//Log the function for the developer to see
console.log(`The sum of ${x} and ${y} is ${calculate(x,y)}`)