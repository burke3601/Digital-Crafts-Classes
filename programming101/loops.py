i = 1
while i <= 10:
    print(i)
    i += 1

j = 10
while j >= 1:
    print(j)
    j -= 1

i_username = input("What is your username?\n")
i_password = input("What is your password?\n")
count = 0
if i_username == "will123" and i_password == "easy123":
    print("Welcome!")

while i_username != "will123" or i_password != "easy123" and count<3:
    print("Incorrect, try again")
    input("What is your username?\n")
    input("What is your password?\n")
    count+=1



# I need to figure out the counter 

username = "will123"
password = "easy123"



