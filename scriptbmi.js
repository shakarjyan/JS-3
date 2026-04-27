// BMI კალკულატორი: გაუმჯობესებული ვერსია (IF/ELSE)
function calculateBmi(weight, height) {
  let shedegi = Math.round(weight / (height * height));
  if (shedegi < 18,5) {
    return "Your BMI is " + shedegi + ", so you are underweight.";
  } 
  else if (shedegi <= 24,9) {
    return "YoUr BMI is " + shedegi + ", so you have a normal weight.";
  } 
  else {
    return "Your BMI is " + shedegi + ", so you are overweight.";
  }
}