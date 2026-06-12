const colors = ["red", "green", "blue"];
// ES5
var red = colors[0];
var green = colors[1];
var blue = colors[2];
// ES6
console.log(red,green , blue); // ["red", "green", "blue"]
const [one,two , three] = colors;
console.log(one); // red
// console.log(two);
console.log(three);


let a = 10
let b = 20
let temp = a 
a = b;
b = temp

[a, b] = [b, a];
console.log(a); 
console.log(b);

// const user = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// // const name = user.name;
// // const age = user.age;
// // const city = user.city;
// // console.log(name, age, city); // John 30 New York

// const {name, age, city} = user;
// console.log(name, age, city)

const userProfile ={
    names:"ali",
    address:{
        town:"lahore",
        country:"pakistan"
    }
};

const { address:{town}}=  userProfile
console.log(town)

// // spread operators


const arr1 = [1,2,3,4]
const arr2= [5,6,7]
const result = [...arr1, ...arr2]
console.log(result)

const profile = {
    name :"Ali",
    age:20,
    address:"fsd"
}

const updateUser ={
    ...profile,
    
}
console.log(updateUser)

// // rest parameter


function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4, 5));  // 15

const nums = [1,2,3,4,5,6,7,8]
const [first, ...remaining] = nums
console.log(first);
console.log(remaining);


const myUser ={
name:"noor",
age :24,
city:"fsd"
}

const { name,...others} = myUser
console.log(name)
console.log(others)


// forEach Method 

const array = [1,2,3,4,5,6]
array.forEach((num,index)=>{
    console.log(index, num)
})

// map method
 const mapArray = [1,2,3,4,5,6]
 const doubled = mapArray.map(num=>num*2)
 console.log(doubled)

 const userAli = [
    {id:1, name:"Ali"},
    {id:2, name:"Ahmad"}
 ]

 const names = userAli.map(user=>user.name)
 console.log(names);

//  find method
 const user = userAli.find(user=>user.id===2)
 console.log(user)


//  filter method

const numAray = [1,2,3,4,5,6,7]
const res = nums.filter(num=> num%2!=0)
console.log(res)
 



