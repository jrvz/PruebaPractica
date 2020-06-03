/*
Excercise 2
Author: Julio César Ramírez Vásquez
Created on: 2/6/2020
Last modification: 3/6/2020
*/

//Controls if the user input is valid.
var isInputValid = false;
//Controls if the user wants to exit the app.
var wantsToExit = false;

//We ask for the input inside this loop. It will continue
//until the input is valid in some way.
while (!isInputValid)
{
  var input = prompt("Indique un número mayor o igual a 0 para calcular su factorial, o bien, digite -1 para salir.");
  
  //This input means the user wants to exit.
  if (input == -1)
  {
    isInputValid = true;
    wantsToExit = true;
  }
  //The input has to be a number!
  else if (isNaN(input))
  {
    console.log("No se pueden digitar letras.");
  }
  //The inputed number can't be negative.
  else if (input < 0)
  {
    console.log("El número digitado no es válido.");
  }
  //The user needs to input something at least.
  else if (input === "")
  {
    console.log("No se ha ingresado valor alguno.");
  }
  //If nothing is wrong, time to exit the loop.
  else
  {
    isInputValid = true;
  }
}

///If the user wants so exit, we shall skip the rest of the
//process.
if (!wantsToExit)
{
  //We parse the input to a number variable.
  var n = parseInt(input);

  console.log("El resultado es el siguiente:");
  
  //CurFactor will hold the temporary values
  //as we calculate each number's factorial.
  var curFactor;

  for (i = 0; i <= n; i++)
  {    
    //If the current value is 0, its factorial is 1.
    if (i === 0)
    {
      curFactor = 1;
    }
    else
    {
      //Otherwise, we begin calculating the factorial by
      //asigning the base value to the variable curFactor.
      curFactor = i;

      //Second loop. Goes backwards to calculate 
      //the factorial.
      for (j = i - 1; j > 0; j--)
      {
        curFactor *= j;
      }
    }
    console.log(i + "! = " + curFactor);
  }
}