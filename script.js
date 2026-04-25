//ონლაინ მაღაზიის მადლობის წერილი
function sayThanks() {
  console.log("Thank you for your purchase! We appreciate your business.");
}
// sayThanks();
// function sayThanks() {
//   console.log("Thank you for your purchase! We appreciate your business.");
// } მეორედ ეს მგონი ზედმეტი გამეორება იქნება 
sayThanks();
sayThanks();
sayThanks();

//არგუმენტები (მართკუთხედის ფართობი)
let userLength = Number (prompt("დაწერეთ სიგრძე:"));
let userWidth = Number (prompt("დაწერეთ სიგანეც:"));
function calculateArea(length, width){
  let area = length * width;
  return area;
}
let area = calculateArea(userLength, userWidth);
console.log("თქვენი მართკუთხედის ფართობია:" +area);

//Default Parameters საყიდლების სია
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log("საყიდლების სია:"+ item1 + ", " + item2 + "," + item3);
}
makeShoppingList("apples");

//კალკულატორი JavaScript-ის ფუნქციების გამოყენებით
function calculateBmi(weight, height) {
  let shedegi = weight /(height * height);
  return Math.round(shedegi);
}