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
