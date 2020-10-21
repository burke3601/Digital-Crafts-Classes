# age = int(input('How old are you?\n'))
# if age == 21:
#    print('time to party')
#elif age >= 21:
 ##   print("You are old enough")
#else:
  #  print("You are not old enough.")
num = 5
guess = int(input("Pick a number 1 - 10?\n"))

while guess != num:
    print("incorrect guess, try again.\n")
    guess = int(input("Pick a number 1 - 10?\n"))
print("congrats!")

    