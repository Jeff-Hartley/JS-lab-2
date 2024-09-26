let number = -2; //number variable declared
// if/else statements to see if a number is positve, negative or zero.
console.log('Some If/Else statements. My number is -2, so I want to see if it is positive, negative or zero.');
if (number > 0) {
    console.log(`The number ${number} is a positve number`);
} else if (number < 0) {
    console.log(`The number ${number} is a negative number.`);
} else {
    console.log(`The number ${number} is 0.`)
}
console.log(' '); //used to create a gap.

var day = 6; //declares variable day. 1-Sunday, 7-Saturday. Week follows as so.

//switch statements for the day of the week
console.log('These are some Switch statements. This switch should break on Friday.');
switch (day) {
    case 1:
        console.log('Sunday.');
        break;
    case 2:
        console.log('Monday.');
        break;
    case 3:
        console.log('Tuesday.');
        break;
    case 4:
        console.log('Wednesday.');
        break;
    case 5:
        console.log('Thursday.');
        break;
    case 6:
        console.log('Friday.');
        break;
    case 7:
        console.log('Saturday.');
        break;
    default:
        console.log('Unknown day.');
}
console.log(' '); //used to create a gap.

//Testing loops
//For loop. Will print numbers from 1 to 5
console.log('Now I want to test a for loop. This should run until it gets to 5.');
for (let i = 1; i <=5; i++) {
    console.log('Number ' + i);
}
console.log(' '); //used to create a gap.

//While loop. Will print numbers from 1 to 5.
console.log('This is a while loop. It should also run until it gets to number 5.');
let i = 1;

while(i <= 5) {
    console.log('Number ' + i);
    i++;
}
console.log(' '); //used to create a gap.

//Do While loop. Will print numbers from 1 to 5.
console.log('And now I have a do loop. It will stop once it gets to 5.');
let j = 1;

do{
    console.log('Number ' + j);
    j++;
} while (j <=5);
console.log(' '); //used to create a gap.


//break and continue statements.
//break statement.
console.log('I am going to try some break statements here.')
for (var k = 1; k <=10; k++){
    if (k === 3) {
        break;
    }
    console.log('Number ' + k);
}
console.log("Loop exited at exactly 3 with a break statement.");
console.log(' '); //used to create a gap



var tempCelsius = [23, 52, 15, 3, 17, 33, 28, 6, 31, 19, 25, -1, 33, 30]; //variable tempCelsius created with many different temperatures including negative.

//continue statement
console.log('This is practicing some continue statements.');
console.log('My favourite temperature is between 15 to 30 degrees celsius.');

for (var t = 0; t < tempCelsius.length; t++) {
    if (tempCelsius[t] < 15) { //if tempCelsius is less than 15, it will not be included.
        continue;
    }
    else if (tempCelsius[t] > 30) { //if tempCelsius is greater than 30, it will not be included.
        continue;
    }
    console.log(tempCelsius[t] + ' is a good temperature!');
}
console.log(" "); // used to create a gap

//scope and context
console.log('Practicing some functions. One variable is in the main code while the other is in a function.');
let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    console.log(localVar, globalVar);
}

scopeExample();

