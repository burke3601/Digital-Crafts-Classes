import random
my_random_number = random.randint(1, 10)

guess_number= ""
counter = 0
print("I am thinking of a number between 1 and 10.")


guess = int(input("Guess the number?\n"))
while guess != my_random_number and counter < 5:
    if guess < my_random_number:
        print("Higher, guess again.")
        guess = int(input("Guess the number?\n"))
    else:
        print("Lower, guess again.")
        guess = int(input("Guess the number?\n"))

print("Correct! Good job!")

    