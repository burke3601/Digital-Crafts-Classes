# Write a program that prints the numbers from 1 to 100. 
# But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
# For numbers which are multiples of both three and five print "FizzBuzz".

# for fizzbuzz in range(1, 101):
#     if fizzbuzz % 3 == 0 and fizzbuzz % 5 == 0:
#         print("FizzBuzz")
     
#     elif fizzbuzz % 3 == 0 and fizzbuzz % 5 != 0:
#         print("Fizz")
     
#     elif fizzbuzz % 5 == 0 and fizzbuzz % 3 != 0:
#         print("Buzz")
    
        
#     print(fizzbuzz)

index = 1
for i in range(1,101):
    if index % 3 == 0 and index % 5 == 0:
        print(f'{index}: FizzBuzz \n')
    elif index % 3 == 0:
        print(f'{index}: Fizz \n')
    elif index % 5 == 0:
        print(f'{index}: Buzz \n')
    else:
        print(index)
    index += 1







# count = 1
# MAX = 100
# while count < 100:
#     count += 1
#     if count % 5 == 0:
#         print("Fizzbuzz")
#     elif count % 3 == 0:
#         print("Fizz")
#     if count %1 == 0:
#         print(count)
    
    


