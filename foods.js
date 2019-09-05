
function myFunction (){
  "use strict";
function addNumbers (a,b) {
var addedTotal=a+b;
return addedTotal;
  }

var addNumbers2=addNumbers (5,3);
alert (addNumbers2);

var foodsName=prompt ("Which do you prefer, bananas or broccoli?");

switch(foodsName){
  case "bananas":
  alert ("You like to eat fruits!");
  break;

  case "broccoli":
  alert ("You like to eat vegetables!");
  break;

  default:
  alert ("This food is neither of these two foods.")
}

console.log(square(5));
function square(n) { return n * n; }

}
