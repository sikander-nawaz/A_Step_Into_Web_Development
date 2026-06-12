let name = "nooor";
let count = 0
function getName() {
    console.log(name);
}
function increment (){
    count ++
}
getName();

function test (){
    let message = "hello"
    console.log(message)
}
test()

{
    let age = 20
    console.log(age)
}

function outer (){
    let name = "ali"

    function inner(){
        console.log(name)
    }
    inner()
}
outer();

function outerFunc(){
    let count = 0;
    return function (){
        count ++
        console.log(count )
    };
}
const incremenCount = outerFunc()
incremenCount();
incremenCount();
incremenCount();

console.log(a)
var a=10;
console.log(a)

console.log(b)
let b = 20

console.log(city)
const city ="fsd"


greet()
function greet(){
    console.log("hello")
}
greet()

greeting()
var greeting = function (){
    console.log("hello")
}


sayHi()
const sayHi=()=>{
    console.log("hi");
    
}



