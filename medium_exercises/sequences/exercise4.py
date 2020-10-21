#4. De-dup
#Given a list of numbers or strings, create a new list containing the same elements as the first list, except with any duplicate values removed. Print the list.

dedup = [ "cat", "cat", "dog", "dog"]

newlist = []


    
for item in dedup:
    if not item in newlist:
        newlist.append(item)
print(newlist)