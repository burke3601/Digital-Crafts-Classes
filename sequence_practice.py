#todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

# print("Here are your todos:")
# print(todos[-2:-1])

# index = 0 # Begin with index 0
# while index < len(todos):
#     todo = todos[index]
#     print("%d: %s" % (index + 1, todo))
#     index += 1

# todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

# count = 1
# for todo in todos:
#     print("%d: %s" % (count, todo))
#     count += 1

# todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

# todos.append("binge watch a show")
# todos.append("go to sleep")

# count = 1
# for todo in todos:
#     print("%d: %s" % (count, todo))
#     count += 1

# todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

# todos.extend(["binge watch a show", "eat a bagel"])

# count = 1
# for todo in todos:
#     print("%d: %s" % (count, todo))
#     count += 1

# todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

# todos[0:4] = ["make cat food", "BAGEL", "cook cat food"]
# print(todos)

# todos = []

# Create a constant for our main menu.
# This saves us from having to type it out twice.
# MAIN_MENU = """
# Choose an action:
# P: Print your to-do list
# A: Add a to-do item
# R: Replace a to-do item

# (Or press Enter to exist the program.)
# """

# choice = input(MAIN_MENU)
# choice = choice.upper() # Simplifies our if-conditions

# As long as they type something, keep prompting
# while len(choice) > 0:
#     if choice == "P":
#         # Print the current list of to-do items
#         print("\n\n\nTo do:")
#         print("====================")
#         count = 1
#         for todo in todos:
#             print("%d: %s" % (count, todo))
#             count += 1
#     elif choice == "A":
#         new_todo = input("What do you need to do? ")
#         if len(new_todo) > 0:
#             todos.append(new_todo)
#     else:
#         print("\n\n***Please enter a valid menu option.***")    

#     choice = input(MAIN_MENU)
#     choice = choice.upper() # Simplifies our if-conditions

# print("Have a nice day!")

# todos = []

# # Create a constant for our main menu.
# # This saves us from having to type it out twice.
# MAIN_MENU = """
# Choose an action:
# P: Print your to-do list
# A: Add a to-do item
# R: Replace a to-do item

# (Or press Enter to exist the program.)
# """

# choice = input(MAIN_MENU)
# choice = choice.upper() # Simplifies our if-conditions

# # As long as they type something, keep prompting
# while len(choice) > 0:
#     if choice == "P":
#         # Print the current list of to-do items
#         print("\n\n\nTo do:")
#         print("====================")
#         count = 1
#         for todo in todos:
#             print("%d: %s" % (count, todo))
#             count += 1
#     elif choice == "A":
#         new_todo = input("What do you need to do? ")
#         if len(new_todo) > 0:
#             todos.append(new_todo)
#     elif choice == "R":
#         # Print the current list of to-do items
#         print("\n\n\nTo do:")
#         print("====================")
#         count = 1
#         for todo in todos:
#             print("%d: %s" % (count, todo))
#             count += 1
        
#         which_index = input("Which to-do number? ")
#         try:
#             which_index = int(which_index)
#             which_index -= 1 # Convert from human-readable to 0-based index
            
#             if which_index >= 0 and which_index < len(todos):
#                 new_todo = input("What do you need to do? ")
#                 todos[which_index] = new_todo
#         except ValueError:
#             print("\n\n***Please enter a number.***")    
#     else:
#         print("\n\n***Please enter a valid menu option.***")    

#     choice = input(MAIN_MENU)
#     choice = choice.upper() # Simplifies our if-conditions

# print("Have a nice day!")

# todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

# del todos[0] # Remove the first one
# print(todos)

# del todos[2:3] # Remove items at index 1 up but not including index 3
# print(todos)

# SIZE = 3
# board = [] # Start with an empty List
# for y in range(SIZE):
#     # Each element in the board will also be a List
#     board.append([])        
#     for x in range(SIZE):
#         # Fill our inner Lists with the coordinates
#         board[y].append("[%d][%d]" % (y, x))

# print("\n\nPlayer X is moving.\n\n")
# board[0][2] = "X"

# for row in board:
#     for column in row:
#         print("%s " % column, end="")
#     print("\n")

# alphabet = "abcdefghijklmnopqrstuvwxyz"

# alphalist = list(alphabet)
# alphalist[0] = "4"

# print(alphalist)

# alphabet = "\nhowdy\n".join(alphalist)
# print(alphabet)

# for letter in alphabet:
#     print(letter)

# print("The first letter is", alphabet[0])

# print("The first three letters are", alphabet[:3])

# print("Some letters in the middle are", alphabet[11:16])

# print("There are %d letters in the alphabet" % len(alphabet))


# coordinates = (33.848673, -84.373313)

# latitude = coordinates[0]
# longitude = coordinates[1]

# print("The latitude is %f and the longitude is %f" % (latitude, longitude))

band_mates = ("John", "Paul", "George", "Pete")
print(band_mates)

band_mates = band_mates[:-1] # All but the last
print(band_mates)

band_mates = band_mates + ("Ringo", )
print(band_mates)