# width = int(input("width?\n"))
# height = int(input("height?\n")) -2

# out_row = '*' * width

# white_width = width - 2
# middle_rows = '*' + ' ' * white_width + '*'

# print(out_row + '|n' + (middle_rows + '|n') * height + out_row)


height = 0
width = 0

while True:
    try:
        height = int(input("Height? \n"))
        width = int(input("width? \n"))
        break
    except ValueError:
        print("choose an integer")

print("* " * width)

while height > 0:
    print(f"* " + " " * {width} + " *")
    height -+ 1

print("* " * width)