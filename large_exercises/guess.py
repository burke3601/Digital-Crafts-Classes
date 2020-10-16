print("I am thinking of a number between 1 and 10.")

secret_num = 5
guess = int(input("Guess the number?\n"))
while guess != secret_num:
    if guess < secret_num:
        print("Higher, guess again.")
        guess = int(input("Guess the number?\n"))
    else:
        print("Lower, guess again.")
        guess = int(input("Guess the number?\n"))

print("Correct! Good job!")

    
    
    
    
    
    
    
    
    
# guess_again = int(input("Guess again.\n"))
#     if secret_num == 5:
#         print("Correct!")
#     elif secret_num >= 4:
#         secret_num = int(input("Guess the number?\n"))
        


