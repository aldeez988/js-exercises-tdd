var fizzbuzz = require("./fizz-buzz");

test("prints 1", function() {
  var result = fizzbuzz(1);
  expect(result).toEqual("1");
});

test("prints 1,2", function() {
  var result = fizzbuzz(2);
  expect(result).toEqual("1, 2");
});

test("prints 1,2,Fizz", function() {
  var result = fizzbuzz(3);
  expect(result).toEqual("1, 2, Fizz");
});

test("prints 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz", function() {
  var result = fizzbuzz(15);
  expect(result).toEqual(
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz"
  );
});
