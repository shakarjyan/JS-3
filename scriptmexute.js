// 1. ვინ ყიდულობს ლანჩს
const users = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function vinGadaixdis(users) {
  let randomShercheva = Math.floor(Math.random() * users.length);
  let selectedUser = users[randomShercheva];
  return selectedUser + " გადაიხდის ლანჩის გადასახადს!";
}
// console.log(vinGadaixdis(users));

// 2. while loop გამოყენება
function beer() {
  let bottles = 99;
  while (bottles > 0) {
    console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.");
    console.log("Take one down and pass it around, " + (bottles - 1) + " bottles of beer on the wall.");
    bottles = bottles - 1;
  }
  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}
// beer();

// 3. ფიბონაჩის მიმდევრობის რეპლიკაცია
function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) { return [0];
  } 
  else if (n === 2) { return [0, 1];
  } 
  else {
        output = [0, 1];
  // ახალი ცვლადის შემოტანა გვჭირდება
  while (output.length < n) {
    let newNumber = output[output.length - 1] + output[output.length - 2];
      output.push(newNumber);
    }
    return output;
  }
}
// console.log(fibonacciGenerator(3));
