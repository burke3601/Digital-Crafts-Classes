numbers = [1,2,3,4]
print(max(numbers))


largest = float("-inf")
for num in numbers:
    if num > largest:
        largest = num 
print(largest)