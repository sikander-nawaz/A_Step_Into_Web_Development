console.log("Hello, World!");
let name = "Ali";
function greet() {
    console.log(name );
    console.log(name.toUpperCase())
    console.log(typeof(name))
    let myName
}

greet();
console.log(name);

function myFunction() {
    let message = "Hello from function scope!";
    console.log(message);
}
myFunction();
// console.log(message); // This will cause an error because 'message' is not defined in the global scope.

{
    let x=10;
    const y=20;
    console.log(typeof(x))
    console.log(x,y); // 10
}

// console.log(x,y); // This will cause an error because 'x' is not defined outside the block scope.


const student = {
  name:  "Fatima",
  age:   21,
  city:  "Karachi",
  pass:  false
};

console.log(student.pass)
console.log(typeof(student))



// "5" + 2  →  "52"
let a = "5"   //string data type
let b = 2
c = a + b 
let d =Number(a) + b   //converting to number
console.log(c)
console.log(d)



console.log("Hello" + 42);         // "Hello42"
console.log(5 + 6+ " this is string");  // "The answer is 56"
console.log(5 + 6 + " is the sum");      // "11 is the sum"

console.log("5" + 2);              // "52"  ⚠️ NOT 7!
console.log("5" + true);           // "5true"
console.log("" + null);            // "null"
console.log("" + undefined);       // "undefined"

let number = 123
console.log(typeof(number))
let stringNumber = String(number)
console.log(typeof(stringNumber));


let stringToNumber = ("          10  ")
console.log(stringToNumber)
console.log(Number(stringToNumber))

// exponential operator 
let numberExponent = 2 ** 8
// 2*2*2*2*2*2*2*2
console.log(numberExponent);


let x = 5;
let z = --x
let y = x--
console.log(x); 
console.log(y);
console.log(z);




