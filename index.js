document.getElementById("count-el").innerText = 0;
// this tells html document to get the element with id "count-el" and change its text to 5

//we create variables and then need a way to store them, let OR var does this
let age = 24;
console.log(age);

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console
// const [var1, var2, var3] = ["Hello, World!", "Testing...", 42];


let myAge=35,humanDogRatio=7; 
let myDogAge = 0;

console.log((myAge * humanDogRatio) + myDogAge/7);

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

let bonusPoints = 50;
bonusPoints = bonusPoints + 50;
console.log(bonusPoints);

bonusPoints = bonusPoints - 75;
bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

// Javascript reads step by step so even though we declared bonusPoints as 50, 
//it will read the next line and add 50 to it,
//so consosle as far as it is concerned, bonusPoints is now 25

function increment() {
    console.log("The button was clicked!");
}

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

function log42() {
    console.log(42);
}

// Create a function that logs out the sum of all the lap times , let lap1 = 34 let lap2 = 33 let lap3 = 36

function sumLapTimes() {
    let lap1 = 34; lap2 = 33; lap3 = 36;
    console.log(lap1 + lap2 + lap3);
}
sumLapTimes();

// Create a function that increments the sumLapTimes variable with one
// Run it three times

function incrementLap() {
    let sumLapTimes = 0;
    sumLapTimes = sumLapTimes + 1;
    console.log(sumLapTimes);
}
sumLapTimes() * 3;

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count = 0; //initializing the count, ALWAYS INITIALIZE OUTSIDE THE FUNCTION
function increment() {
    count = count + 1;
    console.log("Increment was clicked!");
    console.log(count);
    document.getElementById("count-el").innerText = count;
}

function save() {
    save = count;
    console.log("Save was clicked!");
    console.log(count);
    document.getElementById("save-el").innerText = save;
}

