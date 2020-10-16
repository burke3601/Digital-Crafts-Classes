height = input("How tall is the triangle?\n")
height = int(height)
stars = 1
counter = height -1
space = ' '*counter

while height > 0:
    print(space, '*'+stars)
    counter -= 1
    space = ' '*counter
    height -= 1
    stars +=2











# Print Triangle
# base = 7
# stars = 1
# blanks = (int(base - stars) / 2)

# while stars <= base:
#     print("*" * stars)
#     stars += 2

# width = int(input("enter an odd number: ")
# space = int(input(width/2))
# star = 1
# while star <= width:
#     print(" " *(space + 2) + "*" * star " " *space)
#     space -= 1
#     star +-


