#7. Multiply a list
#Create a list of numbers, and a single factor (also a number), create a new list consisting of each of the numbers in the first list multiplied by the factor. Print this list.

numbers = [2,4,6,9,10,11,12,13]
factor = 3

for num in numbers:
    if num > 0:
        print(num * factor)
        list(numbers)