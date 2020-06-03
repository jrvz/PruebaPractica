/**
* Excercise 5
* Author: Julio César Ramírez Vásquez
* Created on: 2/6/2020
* Last modification: 3/6/2020
* 
* Written on repl.it:
* (OpenJDK Runtime Environment (build 11.0.6+10-post-
* Ubuntu-1ubuntu118.04.1))
*/
class Excercise5 {
  public static void main(String[] args) {
    
    //The array to be examined.
    int[] myArray = {1,2,2,5,4,6,7,8,8,8};

    int curRepeatedNumber = 0;
    int curRepetitions = 0;
    int topRepeatedNumber = 0;
    int topRepetitions = 0;

    //Iterating through the array, to search for the numbers.
    for (int i = 0; i < myArray.length; i++)
    {
      //The first value of the array will begin the process.
      if (i == 0)
      {
        curRepeatedNumber = myArray[i];
      }
      if (curRepeatedNumber == myArray[i])
      {
        curRepetitions++;
      }
      //Checking if the current number is different or the last one,
      //to check if it is the new top one.
      if ((curRepeatedNumber != myArray[i])
        || (i == myArray.length - 1))
      {
        if (curRepetitions > topRepetitions)
        {
          topRepeatedNumber = curRepeatedNumber;
          topRepetitions = curRepetitions;
        }
        //Restarting the counter
        curRepeatedNumber = myArray[i];
        curRepetitions = 1;
      }
    }

    System.out.println("Occurencias: " + topRepetitions 
    + "\nNúmero: " + topRepeatedNumber);
  }
}