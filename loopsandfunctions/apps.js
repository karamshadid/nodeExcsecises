function test() {
  console.log("Hello world!");

}
test();

function even() {
  for (let i = 2; i <= 100; i = i + 2) {
    console.log(i);
  }5

}
even();



function printNumbers(howMany) {

  for (let i = 1; i <= howMany; i++) {
    console.log(i);

  }

}
printNumbers(9);


function printNumber2(a, b) {

  for (let i = a; i <= b; i++) {
    console.log(i);
  }

}
printNumber2(4, 8);


function printStars(number) {
  var a = "";
  for (let i = 0; i < number; i++) {
    a = a + "*"


  }
  console.log(a);
}
printStars(9);





function printSquare(sideLength) {
  for (let i = 0; i < sideLength; i++) {
    printStars(sideLength);

  }

}
printSquare(3);




function printRectangle(width, height) {

  for (let i = 0; i < height; i++) {
    printStars(width);

  }
}

printRectangle(3, 6);




function printTraiangle(size) {

  for (var i = 1; i < size; i++) {

    printStars(i + 1);

  }
}
printTraiangle(5);




function seriesSum(n) {

  let sum = 0;

  for (let i = 0; i <= n; i++) {

    sum = sum + i;

  }
  return sum;

}
console.log(seriesSum(10));





function factorial(n) {

  let result = 1;
  for (let i = 0; i <= n; i++) {
    result *= i;
  }
  return result;


}
factorial(10);









function heading(text) {
  let dash = "";


  for (let i = 0; i < text.length; i++) {

    dash = dash + "=";
  }

  console.log(text);

  console.log(dash);
}

function run() {
  heading("Even Numbers");
  even();

  heading("printsNumbers");
  printNumbers(9);

  heading("Exercise three");
  printNumber2(4, 8);

  heading("Exercise four")
  printStars(9);

  heading("Square");
  printSquare(3);

  heading("Rectangle");
  printRectangle(3, 6);

  heading("Traiangle");
  printTraiangle(5);

  heading("SeriesSum");
  console.log(seriesSum(10));

  heading("Factorial");
  console.log(factorial(10));

}

run();
