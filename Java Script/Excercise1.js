/*
Excercise 1
Author: Julio César Ramírez Vásquez
Created on: 2/6/2020
Last modification: 2/6/2020
*/

//We call the function sending each one of the arrays.
console.log(multiply([2, 3, 4, 6]));
console.log(multiply([123, 67, 890, 4]));
console.log(multiply([2, 3, 7, 9, 4, 5, 6, 9, 12]));


/*Recieves an array, iterates through it, and multiplies numbers in the array with each other, avoiding the one corresponding to each iteration, and stores the results in an array.*/
function multiply(intArray)
{
  //The final result will be stored in this new array.
  var result = Array(intArray.length);
  //For storing the number to be avoided in the loop.
  var curAvoidable;
  //The result of individual multiplications in the loop
  //will be stored here.
  var curResult;

  //Main loop, to iterate through the array.
  for (var i = 0; i < intArray.length; i++)
  {
    curAvoidable = intArray[i];
    curResult = 0; 

    //Another for loop, to execute the operations.
    for (var j = 0; j < intArray.length; j++)
    {
      
      //If current number is NOT the one to be avoided, then
      //do the operation.
      if (i != j)
      {
        var curNumber = intArray[j];

        //If curResult is zero, it needs to be started as the
        //curNumber, else, the multiplication is applied.
        if (curResult === 0)
        {
          curResult = curNumber;
        }
        else
        {
          curResult *= curNumber;
        }
      }
    }

    //We save the result from the current .
    result[i] = curResult;
  }
  return result;
}