# Sum of All Multiples of 3 or 5 below 1000
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

x = 0
for x in range (1, 1001):
    a =3
    b = 5
    if x % a == 0 or x % b ==0:
        r += x


    
# i = 1
# total = 0
# while i <= 1000:
#     if % 3 == 0 or i %