// Control Structures

//Conditional statements

//use the if statement if you want to execute a script only if the condition is true

var num = 1;

if (num === 1){
  console.log("num is equal to 1");
}

//use the if...else statement if you want to execute a script if the condition is true or another script justi n case the condition is false

var num = 0;

if(num === 1){
  console.log("num is equal to 1");
} else {
  console.log("num is not equal to 1, the value of num is " + num);
}

// the if else statement can also be represented as a ternary operator

if (num === 1){
  num--;
} else {
  num++;
}

// the above code can be represented using a ternary operator

(num === 1) ? num-- : num++;

// and if you have several scripts we can use if...else several times to execute based on differernt conditions

var month = 5;

if(month === 1){
  console.log("January");
} else if (month === 2){
  console.log("February");
} else if (month === 3){
  console.log("March");
} else {
  console.log("The month is not January, February, or March.")
}

// Finally you have the switch statement, which is useful if the condition you're evaluating is thee same as the previous one, however it is being compared to different values

var month = 5;
switch(month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("The month is not January, February, or March.")
}

/* Here you are using the case and break keywords.

The case clause determines whether the value of switch is equal to the value of the case clause

The break statement stops the switch statement from executing the rest of the statement

The default statement is executed if none of the case statements are true

*/

// Loops

// For Loops

for (var i = 0; i < 10; i++){
  console.log(i);
}

// While Loops

var i = 0;
while (i < 10)
{
  console.log(i);
  i++;
}

// Do while Loops

var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
