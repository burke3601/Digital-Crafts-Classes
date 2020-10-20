numbers = [1,2,3,4,5,6,7,8,9,10,11,12]
num = 0

while(num < max(numbers)):
    even = num % 2 == 0
    if even:
        print(num)
    num += 1
