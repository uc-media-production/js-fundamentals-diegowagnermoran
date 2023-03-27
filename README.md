# JavaScript Fundamentals

You will have a series of tasks to complete. Each task will be in the `actions.js` file. This file is already connected to the `index.html` page. To view any `console.log` statements, open this `index.html` file in a browser and open the console in the developer tools.

## Tasks

1. Create an object and store it in a `const` named `person`. That object has the following properties:
   - `firstName` - a string
   - `lastName` - a string
   - `age` - a number
   - `major` - a string
2. Create an array of "strings" and store it in a `const` named `favoriteBands`.
3. Create a function named `getFullName` that takes a `person` object as an argument and returns the person's full name.
4. Create a function named `printBiography`. This function accepts two arguments, `person` (object) and `bands` (string array).
   1. It should `console.log` a string following this template: "My name is `firstName` `lastName` and I am `age` years old. I study `major` at the University of Cincinnati. My favorite bands are:"
   2. Use a loop to `console.log` each band from the `bands` array.