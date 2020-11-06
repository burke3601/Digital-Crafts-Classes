# 1. Given an array of integers, find if the array contains any duplicates.
    # -- Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

mylist = [1,2,3,4,5,1,2]


def checkDuplicates(mylist):
    if len(mylist) == len(set(mylist)):
        return False
    else:
        return True


print(checkDuplicates(mylist))

    
# 2. Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
    # -- The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
    # -- You may assume the integer does not contain any leading zero, except the number 0 itself.

A = [1,2,3]

B =[4,3,2,1]

C = [0]

def plusOne(digits):

    for i in range(len(digits)-1,-1,-1):
        digits[i] = digits[i] +1

        if digits[i] != 10:
            return digits
        elif digits[i] == 10:
            digits[i] = 0
            if i == 0:
                digits.insert(0,1)
    return digits

print(plusOne(A))

# 3. Given two arrays, write a function to compute their intersection.

array1 = [1,2,3,4]
array2= [4,5,6,7]

def intersection(array1, array2):
    return list(set(array1) & set(array2))

print(intersection(array1, array2))

# def meet(l1, l2):
#     intersect = [num for num in li if num in l2]

# Statues

def numberStatues(statues):
    i=0
    for statue in statues:
        if statue -1 in statues:
            continue
        elif statue -1 < 0:
            continue
        else:
            i += 1
    return i

print( numberStatues( [6, 2, 3, 8]) ) 
print( numberStatues( [5, 4, 6] ) ) 
print( numberStatues( [6, 3] ) )
print( numberStatues( [0, 3] ) )
print( numberStatues( [19, 5, 8, 14, 11]) ) 