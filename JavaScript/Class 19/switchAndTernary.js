let score = 84;

if (score < 90 && score > 80) {
  grade ="A";
} 
else if (score <80 && score>70) {
  grade = "B";
} 
else if (score <70 && score>60) {
  grade = "C";
} 
else {
  grade = "F";
}
console.log(`Score: ${score} → Grade: ${grade}`);

// score=72 → prints: C


let day = "1";
// ===
switch (day) {
  case "1":
    console.log("New week! 💪"); break;
  case "2":
    console.log("Weekend soon! 🎉"); break;
  case "3":
    console.log("Weekend has come! 🎉"); break;
  case "4":
    console.log("Rest day! 😴"); break;
  default:
    console.log("Midweek");
}



// ternary operator
let age = 17 
console.log(age >=18 ? "HaveId":"")
console.log(result)


if(age >= 18){
    console.log("haveID");
}
else{
    console.log("notHaveID");
}


// while loop
let i =6;
while(i <= 5){
     console.log(i)
     i++;   //1    2    3   4   5   6
}

// do-while loop
do{
    console.log(i);
    i++;    //7
}while(i<=5)


// for loop

for(let a = 1;  a<=5;   a++){
        console.log(a)
}