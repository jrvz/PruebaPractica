#Excercise 3
#Author: Julio César Ramírez Vásquez
#Created on: 2/6/2020
#Last modification: 2/6/2020
#Written on repl.it (ruby 2.5.5 p157)

# Recieves an array of integers, loops through it, and
# prints the highest one.
def find_highest_number(myArray)
  #Through each iteration, the highest value will be
  #stored here.
  highestNumber = 0
  
  #Looping through the array, finding the highest one.
  myArray.each {
    |curNumber|
    #If the current one is higher than our highest one,
    #it becomes the new highest.
    if highestNumber < curNumber
      highestNumber = curNumber
    end
  }
  puts highestNumber
end

#Method call
find_highest_number([13,2,4,35,1])