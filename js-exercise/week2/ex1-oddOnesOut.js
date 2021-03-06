/**
 ** Exercise 1: The odd ones out **
 Rewrite the following function using map and filter. 
 Avoid using for loop or forEach.
 The function should still behave the same.
 */
 function doubleEvenNumbers(numbers) {
    const newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        newNumbers.push(numbers[i] * 2);
      }
    }
    return newNumbers;
  }
  
  const myNumbers = [1, 2, 3, 4];
  console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console

  //Using map and filter
  //map creates a new array by transforming every element in an array individually. filter creates a new array by removing elements that don't belong
  const evenNumbersdouble = myNumbers
  .filter(number => number % 2 === 0)
  .map(number => number * 2);

  console.log(evenNumbersdouble);
