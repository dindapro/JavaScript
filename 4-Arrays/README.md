# JavaScript Arrays

## 174-What Matters
What Matters :

## 175-Introducting Arrays 
Ordered collections of values.
* List of comments on IG post
* Collection of levels in a game
* Songs in a playlist

```bash
// to make an empty array
let students = [];

// An array of strings
let colors = ['red', 'orange', 'yellow'];

// An array of numbers
let lotofNums = [1,2,3,4,5,6];

// A mixed array
let stuff = [true, 8, 'cat', null];
```

## Exercise 25
Lotto Numbers Exercise

Let's get some practice creating arrays. Please define a variable called lottoNumbers and set it equal to an array containing any 6 numbers.  It's simple, but we've got to start somewhere!

```bash
// Define lottoNumbers below:
let lottoNumbers=[19,22,11,23,33,11]
```

## 176-Array Random Access
Array are indexed

String has indexed
```bash
let firstName = "teguh";

# Check output firstname
firstName[0]

# Try to update index
firstName[0] = 'T';

# Check result
firstName
"teguh"
```

Try update array 
```bash
let warna = ['rad','blue','yellow'];
undefined

# output index 0
warna[0];
"rad"

# Try to update index of array
warna[0] = 'red';
"red"

warna[0];
"red"

```
Check if you cannot update index in string 

Check if you can update index in array from number to string or to null

check if you can add new array with assign value [new num-0f-index]

```bash
let beatles = ['paul', 'john', 'george']
beatles[3] = 'ringo';
beatles
//result
['paul', 'john', 'george', 'ringo']
```
please notice annoying we must know the index to be added


## Coding Exercise 26
```bash
Array Access Exercise
I've provided you with a leaderboard array, which consists of 4 strings.  Without touching line 1, please make the following changes:

Unfortunately, I misspelled the 2nd name in the leaderboard array.  I meant to write "Luna" instead of "Lua".  Please update it to "Luna" (without changing line 1)

Bellatrix has fallen off the leaderboard and has been replaced by Draco! Please update the last element of the array so that it holds "Draco" instead of "Bellatrix" (once again, please do this without changing line 1)

```

```javascript
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!
leaderboard[1]='Luna';
leaderboard[3]='Draco';
// YOUR CODE BELOW HERE:
```

## 177- Push & Pop

Array Methods
* Push - Add to end 
* Pop - Remove from end
* Shift - Remove from start
* Unshift - add to start

Review string method with
```bash
'LOL'.length
```
review other method from mdn
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

```javascript
let movieLine = ['tom', 'nancy']
//adding new data but we must know the index
movieLine[2] = 'pablo'
//adding new data with push
movieLine.push('oliver')
```
Review if we add method to string it is not updated 

for example 
```javascript
let cat = "blue" ;
cat.toUpperCase()

// check cat again
cat 
// result
blue
```

review add multi index in push method
```javascript
movieLine.push('oliver', 'mamang')
```

review pop command 


## 178-Shift & Unshift

## Coding Exercise 27
```bash
Push/Pop/Shift/Unshift Practice
I've provided you with an array called planets. Unfortunately, I'm an idiot who doesn't know much about our solar system and I made some mistakes.  Please help me fix the planets array!  Using the array methods we just learned...

Remove the first element, "The Moon", from the planets array.  The moon is not a planet!

Add in "Saturn" at the very end of the planets array

Add "Mercury" as the first element in the planets array.

At the end of your hard work, planets should look like this: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]

(This one is super easy to cheat on.  Please use the array methods we just covered, rather than simply changing the values in planets directly)

```

Answer
```javascript
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

planets.shift();
planets.push('Saturn');
planets.unshift('Mercury');
// YOUR CODE GOES BELOW THIS LINE:

```


## 179-Concat, indexOf, includes & reverse

## 180-Slice & Splice

## 181-Reference Types & Equality Testing


## 182-Arrays + Const

## 183- Multi-Dimensional Arrays


## Coding Exercise 25: Lotto Numbers Exercise

## Coding Exercise 26: Array Access Exercise

## Coding Exercise 27: Push/Pop/Shift/Unshift Practice
