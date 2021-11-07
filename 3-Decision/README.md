# JavaScript Decision String



Crucial 
* Comparison Operators
* Running JavaScript from a File
* Conditionals: If, Else-if, and Else
* Truth-y and False-y Values
* Logical AND
* Logical OR 
* Logical NOT



## 160. Decision Making With Code??
Making decisions with JavaScript 

## 161. Comparison Operator

Operator | Describe
---------|---------
1 < 2    | Greater than
2 > 1    | Less than
4 >= 3   | Greater than or equal to
3 <= 3   | Greater than or equal to
4 == 4   | equality
5 != 6   | not equal
8 === 8  | Strict equality
8 !== 9  | Strict non-equality

### Check 
Compare string with unicode
[Download](https://www.unicode.org/charts/PDF/U0000.pdf)

## 162. Equality: Triple Vs. Double Equals
* Checks for equality of value, bot not equality of type.
* It coerces both values to the same type and then compares them.
* This can lead to some unexpected results!

## Weirdnesss
```bash
5 == 5;
'b' == 'c';
7 == '7';
0 == '';
true == false;
0 == false;
null == undefined;
```

## 163. Console, Alert, & Prompt
```bash
console.log("HELLO")
HELLO

console.log(1+3, "HI", true)
4 HI true

console.warn("this is warning message!")
this is warning message!

console.error("Error Message!")
Error Message!

alert("here pop up alert!")

prompt("please enter a number")

let userInput = prompt("please enter a number")

userInput

userInput + 1

parseInt(userInput)

parseInt("101")

parseInt("101asd")
```

## 164. Running JavaScript From A Script!
Running Code From File
* Write your code in a .js file 
* Include your script in a .html file
* Best practice put at the very end of our body


## 165. If Statements
making decisions with code 
* Only runs code if given condition is true
```bash
let rating = 3;
if (rating === 3){
    console.log("YOU ARE SUPERSTAR!");
}
```

## Exercise
```bash
function isEven(num){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   
   if (num % 2 === 0) {
       console.log("even");
   }
    //AND THIS LINE ↑↑↑↑↑
}
```

## Else-if


## Else


## Exercise 
```bash
function getColor(phrase){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (phrase === 'stop') {
        console.log("red")
    } else if (phrase === 'slow') {
        console.log("yellow")
    } else if (phrase === 'go') {
        console.log("green")
    } else {
        console.log("purple")
    }
   
   
    //AND THIS LINE ↑↑↑↑↑
}
```

## 168. Nesting Conditionals

## Coding Exercise 32
```bash
// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102// THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 




// DO NOT TOUCH ANYTHING BELOW (please) 
if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}
```

## 169. Truth-y & False-y Values
* All JS values havfe an inherent truthyness or falsyness about them
* Falsy value:
  * false
  * 0
  * ""
  * null
  * undefined
  * NaN
* Everything else is truthy!

## 170. Logical AND

Operator       | Result
---------------|---------
true && true   | true
false && true  | false
true && false  | false
false && false | false

1 === 1 && 2 < 7

true

## Coding Exercise 24
```bash
const mystery = 'P1237568'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}
```

## 171. Logical OR

If one side is true, the entire thing is true 

```bash
1 !== 1 || 10 == 10 // true
10/2 ===5 || null   // true
0 || undefined      // false


```

## 172. Logical NOT

! expression return true if expression is false

```bash
!null // true 
!( 0 === 0 ) //false
!(3 <= 4) //false
```


## 173. The Switch Statement Is...A Lot

