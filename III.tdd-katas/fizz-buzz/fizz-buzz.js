module.exports = n => {
  var result = "";
  for (i = 1; i <= n; i++) {
    if ((i % 3 === 0 && i % 5 === 0) || (hasThree(i) && hasFive(i))) {
      result += "FizzBuzz" + ", ";
    } else if (i % 3 === 0 || hasThree(i)) {
      result += "Fizz" + ", ";
    } else if (i % 5 === 0 || hasFive(i)) {
      result += "Buzz" + ", ";
    } else {
      result += i + ", ";
    }
  }
  return result.slice(0, -2);
};

function hasThree(number) {
  var numbersArray = String(number).split("");
  return numbersArray.find(number => number === "3") === "3";
}

function hasFive(number) {
  var numbersArray = String(number).split("");
  return numbersArray.find(number => number === "5") === "5";
}
