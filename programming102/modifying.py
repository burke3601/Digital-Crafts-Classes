#1
# names = ["Will", "William", "Billy", "Bill", "Wilson"]
# names.append("Willy")
# print(names)

#2

# names2 = ["James","Jimmy", "Jimbo", "Jim", "Jimmer" ] 
# names2[2] = "Foo"
# names2 [4] = "Bar"
# print(names2)

#3 Write a program that has a list of 5 names.
#Loop through the array printing the item at index 0 and then removing that item from the array until there are no items in the array.
#(hint) This will use a while loop.

names2 = ["James","Jimmy", "Jimbo", "Jim", "Jimmer"] 


while len(names2):
    print(names2[0])
    del names2[0]
    
  
# print(id("a"))

# x = "a"
# print(id(x))