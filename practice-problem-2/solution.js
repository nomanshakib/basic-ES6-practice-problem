/* 
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result. 
*/

const friends = ['Rahim', 'Karim', 'Chandroo', 'Tararara', 'Mahindra', 'Ravi', 'Rockey'];

const checkEven = () => {
    const result = [];
    
    for (let friend of friends) {
        if (friend.length % 2 === 0) {
            result.push(friend);
        }
    }
    return result;
};

checkEven(friends);



/* Own Practice Check even number and push into a array */
const numbers = [12, 13, 14, 15, 26, 38, 45, 56, 35, 21];

const checkEvenNumber = () => {
    const result = [];
    
    for (let number of numbers) {
        if (number % 2 === 0) {
            result.push(number);
        }
    }
    return result;
};

checkEvenNumber(numbers);