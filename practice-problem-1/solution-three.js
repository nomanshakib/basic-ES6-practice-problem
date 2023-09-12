/* 
3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.
*/

const sum = (add1, add2 = 0) => add1 + add2;

/* test */
sum(2, 3);

/* or */

const addTwo = (a, b = 0) => a + b;

/* test */
addTwo(2, 3);