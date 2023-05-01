// check if a number is odd or even
var a= prompt("Enter the number in question.")
let number = parseInt(a)
if (a%2===0){
    console.log('even number')
}
else{
    console.log("Odd number")
}

//Function `isNumber()` checks if input variable is a number by using isNaN() in-built JavaScript function.
function isNumber(num){
    if(isNaN(num) == true){
        console.log(num, "is not a number")
    }
    else{
        console.log(num,"is a number")
    }
}
isNumber(25)

//if elseif else if
function weightClassifier(num){
    if(num<60) console.log("lightweight");
    else if(num<90)console.log("Mediumweight");
    else if(num<130)console.log("Heavywight")
    else console.log("Obese")
}
 
weightClassifier(120)

// Find out color of a flower
flower= prompt("which flower do you question?")
switch(flower){
case "rose":
    console.log("Roses are red.")
case "lily":
    console.log("Lilies are white.")
case "sunflower":
     console.log("Flower is yellow.")
default:
    console.log("Flower is not important to men.")}


// for loops
