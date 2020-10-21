width,height = int(input("Width? ")), int(input("Height? "))

on_row = 0
while on_row <= height:
    if on_row == 0 or on_row == height:
        print("*"*width)
    else:
        stars = "*" + " "*(width-2) + "*"
        print(stars)
    on_row += 1


# height = 0
# width = 0

# while True:
#     try:
#         height = int(input("Height? \n"))
#         width = int(input("width? \n"))
#         break
#     except ValueError:
#         print("choose an integer")

# print("* " * width)

# while height > 0:
#     print(f"* " + " " * {width} + " *")
#     height -+ 1

# print("* " * width)