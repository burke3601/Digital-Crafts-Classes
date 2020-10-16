import random

s_num = random.randint(1, 10)
guess = None
guess_count = 0
print(s_num)
play_again = "yes"

while play_again == "yes":
    guess, guess_count, s_num = None, 0, random.randint(1,10)
    
    while guess != s_num and guess_count < 5:
        guess_count += 1
        try:
            guess = int(input("Guess the number?\n"))
            break
        except ValueError:
            print("You didn't enter a number.")
            guess = 0

    if guess == s_num:
        print("Winner!")
    elif guess < s_num:
        print("your number is too low, try again. ")
    else:
        print("Your number if too high, try again. ")
        guess_count += 1

    if guess_count >= 5:
        print("Too many guesses, game over.")



play_again = input("Do you want to play again?")


















# import random
# my_random_number = random.randint(1, 10)

# guess_number= ""
# counter = 0
# print("I am thinking of a number between 1 and 10.")


# guess = int(input("Guess the number?\n"))
# while guess != my_random_number and counter < 5:
#     if guess < my_random_number:
#         counter += 0
#         print("Higher, guess again.")
#         guess = int(input("Guess the number?\n"))
#     else:
#         counter += 0
#         print("Lower, guess again.")
#         guess = int(input("Guess the number?\n"))

# print("Correct! Good job!")

# # need to figure out counter

    