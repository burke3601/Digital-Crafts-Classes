#6. Positive Numbers II
#Create a list of numbers, create a new list which contains every number in the given list which is positive.

numbers = [-5,-4,-3,-2,-1,0,1,2,3,4,5]
new_list = []
for num in numbers:
    if num > 0:
        print(num)
        new_list.appeend(num)
    