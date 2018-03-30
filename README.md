# Maths Treasure Hunt

A treasure hunt with maths questions for those rainy days in with the kids.

## Requirements

None. Just open `index.html` in your browser (double click it).

## Setup

Open `questions.js` to edit the maths questions and set clues.

First set a random unique code, e.g. `1243`. Then set your maths question, e.g. `1, '+', 2`. Finally, enter the clue to be shown when the correct answer is entered, e.g. `Under the desk`.

```javascript
var codedquestions = {
  1243: [1, '+', 2, "Under the desk"],
  1379: [2, '+', 2, "Baby seat"],
]
```

Hide the next code in that location, e.g. `1379` should be hidden "Under the desk". 

Suit the clues to your own needs, make them as difficult and as cryptic as you like.

## Maths questions

Questions are simple addition `+`, subtraction `-`, multiplication `*` or division `/`.
