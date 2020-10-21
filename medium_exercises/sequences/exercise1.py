#1. Multiply Vectors
#Given two lists of numbers of the same length, create a new list by multiplying the pairs of numbers in corresponding positions in the two lists.

list1 = [1,2,3]
list2 = [4,5,6]


print("List 1:" + str(list1))
print("List 2:" + str(list2))


mult_list = [] 
i = 0
for i in range(0, len(list1)): 
    mult_list.append(list1[i] * list2[i]) 

print(mult_list)



while i < len(list1)