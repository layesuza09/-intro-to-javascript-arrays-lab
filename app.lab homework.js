const foods = []
console.log('Exercise 1 Result:', foods);

foods.push("pizza", "cheeseburger");
console.log("Exercise 2 Result:", foods)

foods.unshift("taco");
console.log('Exercise 3 result:', foods);

var favFood = foods[1]
console.log('Exercise 4 result:', favFood);

foods.splice(2, 0, 'tofu');
console.log('Exercise 5 result:', foods);

foods.splice(1,1, 'sushi', 'cupcake');
console.log('Exercise 6 result:', foods);

const yummy = foods.slice(1,3);
console.log('Exercise 7 result:', yummy);

const soyIdx = foods.indexOf('tofu')
console.log('Exercise 8 result:', soyIdx);

const allFoods =" taco + - sushi + - cupcake + - tofu + - cheeseburger";
console.log('Exercise 9 result:', allFoods);

const hasSoup = foods.includes('soup');
console.log('Exercise 10 result:', hasSoup);

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];


let odds = [];
function oddNumbers(nums) {
    if (nums % 2 === 1) {
         odds.push(nums);
    }
}
    nums.forEach(oddNumbers);
console.log('Exercise 11 result:', odds);


/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

function fizzBuzz(num) {
    let fizz = [];
    let buzz = [];
    let fizzbuzz = [];

    for(let num of nums) {
        if (num % 3 === 0 && num % 5 === 0) {
            fizzbuzz.push(num);
            fizz.push(num);
            buzz.push(num); 

        }
            else if (num % 3 === 0) {
                fizz.push(num);
        }
            else if (num % 5 === 0){
                    buzz.push(num);
                }
            }
            
}
    

console.log('Exercise 12 Results:');
console.log('  fizz:');
console.log('  buzz:');
console.log('  fizzbuzz:');

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
let numList = []
numList = numArrays[numArrays.length - 1],

console.log('Exercise 13 result:', numList);

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

let num = numArrays[2][1];


console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

let total = 0;
let lastArray = numArrays[numArrays.length -1];
for(let num of lastArray) {
    total += num;
}


console.log('Exercise 15 result:\n', total);




