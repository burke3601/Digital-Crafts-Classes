
coins = 0

print(f"You have {coins} coins.")
more = input("would you like another coin? yes or no \n")

while more == "yes":
    coins += 1
    print(f"You have {coins} coins.")
    more = input("would you like another coin? yes or no \n")
if more == "no":
    coins == coins
print("bye.")    


# not sure why this is infinite bye


