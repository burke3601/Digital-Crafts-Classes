
num=int(input("enter a number \n"))
factors = []
for x in range(1,num+1):
    if num % x == 0:
       factors.append(x)

print ("Factors of {} = {}".format(num,factors))














# def print_factors(x):
#    print("The factors of",x,"are:")
#    for i in range(1, x + 1):
#        if x % i == 0:
#            print(i)

# num = 60

# print_factors(num)






#num =int("pick a number\n ")
#factors = num / 