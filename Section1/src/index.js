console.log("======== Section 1 -Variables and Data Types ========");
const myName = "Stephany"
let favoriteLanguage = "Python"
let newFvoriteLanguage = "Javascript"
favoriteLanguage = newFvoriteLanguage
console.log(`My name is ${myName} and my favorite coding language is ${favoriteLanguage}`);

console.log("======== Section 1- Strings ========");
let firstVariable = "Hello World"
firstVariable = 3
secondVariable = ''
secondVariable = firstVariable
secondVariable = "No more please"
console.log(firstVariable);
console.log(secondVariable);
console.log(`Hello, my name is ${myName}`);


console.log("======== Section 1 - Booleans ========");
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a<b);
console.log(c>d);
console.log('Name'== 'Name');

//* need to use && or || only
console.log(true||false); 
//* need to use && or || only
console.log(false || false || false|| false || false || true); 

console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b === c);
console.log(a*a === d);
console.log(48 == '48');

console.log("======== Section 1- The Farm ========");
let animal = "duck"
if (animal === "cow") { 
    console.log("mooooo");
} else {console.log("Hey! You're not a cow.");
}

console.log("======== Section 1- Driver's Ed ========");
let age = 16
if (age >= 16){ console.log("Here are the keys");
}else { console.log("Sorry, you're too young");}



console.log("======== Section 2- The Basics ========");
console.log("--- Print 0-10, inclusive ---");
let z = 0
for (let z = 0; z <= 10; z++){ console.log(z);}

console.log("--- Print 10-400, inclusive ---");
let y = 10
for (let y = 10; y >= 10 && y <= 400 ;y++) {console.log(y);}

console.log("--- Print every 3rd number from 12-4000 ---");
for (let x = 12; x < 4000; x = x + 3) { 
    console.log(x); 
}

console.log("======== Section 2 - Get Even ========");
for (let w =1; w<= 100; w++){
    if (w %2 == 0) {console.log(`${w} is an even number`);}
    else {console.log(w);}
}

console.log("======== Section 2 - Give me Five ========");
for (v = 0; v <= 100; v++){
    if (v%5 == 0){console.log(`I found ${v}. High five!`);}
    else console.log(v);
}

console.log("blueberry");
console.log("===== Functions- printGreeting =====");
function printGreeting($(name)) {
    return ()
    
}