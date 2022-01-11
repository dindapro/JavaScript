# JavaScript Arrays

## 174-What Matters
What Matters :

## 175-Introducting Arrays 
Ordered collections of values.
* List of comments on IG post
* Collection of levels in a game
* Songs in a playlist


## 176-Array Random Access
Each element is assigned an index

Ccannot update with string
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

# update index
warna[0] = 'red';
"red"

warna[0];
"red"

```

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

Review method from string 
```javascript

```

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
