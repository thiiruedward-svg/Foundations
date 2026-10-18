console.log("Hello, world!");

var name = "Edward Nguku"
console.log(name);

let age=35
let country="Kenya"

console.log(age);
console.log(country);

let student;

console.log(student);
student = "Edward Nguku";
console.log(student);

console.log(country);
country = "Tanzania";
console.log(country);

 let studentname = "Edward Nguku";

 //Examples of primitive data types
 let FirstName = "Edward";//sting
 let age1 = 26;//number
 let isStudent1 = true;//boolean
 let student1;//undefined
 let student2 = null;//null

 //Examples of non primitive data types
 let Student3 = { name: "Edward", age:26};//object
 let color = [ "Red", "Green", "blue"];//array
 let greet = function() {console.log("Hello, Edward!");};//function

 let numberOne = 10;
 let numberTwo = 5;

 let sum = numberOne + numberTwo;
 console.log(" The sum of " + numberOne + " and " + numberTwo + " is: " +sum);

 let difference = numberOne - numberTwo;
 console.log("The difference of " + numberOne + " and " + numberTwo + " is: " +difference);

 let product = numberOne * numberTwo;
 console.log("The product of " + numberOne + " and " + numberTwo + " is: " +product);

 let quotient = numberOne / numberTwo;
 console.log("The quotient of " + numberOne + " and " + numberTwo + " is: " +quotient);

 let remainder = numberOne % numberTwo;
 console.log("The remainder of " + numberOne + " and " + numberTwo + " is: " +remainder);

 let exponentiation = numberOne ** numberTwo;
 console.log("The exponentiation of " + numberOne + " and " + numberTwo + " is: " +exponentiation);

 let increment = numberOne++;
 console.log("The increment of " + numberOne + " is: " +increment);

 let decrement = numberOne--;
 console.log("The decrement of " + numberOne + " is: " +decrement);


 let x = 10;
 let y = 5;

 console.log("the value of x is: " + x);
 x = y;
 console.log("the value of x is now: " + x);

 x += y;
 console.log("the value of x after addition asignment is: " + x);

  x -= y;
 console.log("the value of x after subtraction asignment is: " + x);

  x *= y;
 console.log("the value of x after multiplication asignment is: " + x);

  x /= y;
 console.log("the value of x after division asignment is: " + x);

  x %= y;
 console.log("the value of x after modulus asignment is: " + x);

  x **= y;
 console.log("the value of x after exponentiation asignment is: " + x);


 let a = 10;
 let b = "10";
 console.log("is a strictly equal to b? " + (a==b));

 console.log("is a equal to b? " + (a===b));

 console.log("is a not equal to b? " + (a!=b));

 console.log("is a strictly not equal to b? " + (a!==b));

 console.log("is a greater than b? " + (a>b));

 console.log("is a less than b? " + (a<b));

 console.log("is a greater than or equal to b? " + (a>=b));

 console.log("is a less than or equal to b? " + (a<=b));


 let c = 5;
 let d = 10;
 console.log("is c less than d and a greater than b? " + (c < d && a > b));
 console.log("is c less than d or a greater than b? " + (c < d || a > b));
 console.log("is c less than d and not a greater than b? " + (c < d && !(a > b)));

 results = "3" + 2;
 console.log(results, "-", typeof(results));
 results = true + "3";
 console.log(results, "-", typeof(results));
 

 results = Number("5");
 console.log(results, "-", typeof(results));
 results = String(true);
 console.log(results, "-", typeof(results));
 results = Boolean(0);
 console.log(results, "-", typeof(results));


 let number = 9;

 if (number % 2 === 0) {
    console.log(number + " is even.");
 } else{
    console.log(number + " is odd.");
 }

 
 
 let totalMarks;

 let subjectOne = 85;
 let subjectTwo = 90;
 let subjectThree = 78;
 let subjectFour = 92;
 let subjectFive = 88;

 totalMarks = subjectOne + subjectTwo + subjectThree + subjectFour + subjectFive;
  
 let averageMarks = totalMarks / 5;

 console.log("Average Marks: " + averageMarks);

 if (averageMarks >=90){
    console.log("Grade A");
 } else if (averageMarks >=80 && averageMarks < 90){
    console.log("Grade: B");
 } else if (averageMarks >=70 && averageMarks < 80){
    console.log("Grade C");
 } else if (averageMarks >=60 && averageMarks < 70){
    console.log("Grade: D");
 } else {
    console.log("Grade: F");
 }