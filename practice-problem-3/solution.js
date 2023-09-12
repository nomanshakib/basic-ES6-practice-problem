/* 
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. 
*/

const numbers = [2, 3, 4, 5];
const squareAvg = (nums) =>
    nums.reduce((acc, curr) => acc + (curr * curr) / nums.length, 0);
  
squareAvg(numbers);