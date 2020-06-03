#Excercise 4
#Author: Julio César Ramírez Vásquez
#Created on: 2/6/2020
#Last modification: 2/6/2020
#Written on repl.it (ruby 2.5.5 p157)

# Recieves an array of integers, all between 1 and 5
# and makes a histogram of how many times those
# numbers from 1 to 5 appear on the array.
def create_histogram(myArray)

  #The base values that we will be searching for in myArray.
  baseArray = [1,2,3,4,5]
  #The histogram array, with matching positions.
  histogramArray = ["1: ","2: ","3: ","4: ","5: "] 

  #Iterating through each value in myArray
  myArray.each {
    |curNumber|
    #Iterating through the base values to find the one that
    #matches the current number.
    baseArray.length.times do |counter|
      if curNumber == baseArray[counter]
       #Adding a point to the matching base value.
       histogramArray[counter] += "*"
      end
    end
  }
  puts histogramArray
end

#Method call.
create_histogram([1,2,1,3,3,1,2,1,5,1])