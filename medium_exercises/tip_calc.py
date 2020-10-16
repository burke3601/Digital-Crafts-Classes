bill = float(input("Total bill amount?\n"))

service = input("Service level: good, fair, or bad?\n")

if service == "good":
    
    tip = bill * 0.20
    total = bill + tip
    print(f"Tip amount is {tip}")
    print(f"Total amount is {total}")
elif service == "fair":
    tip = bill * 0.15
    total = bill + tip
    print(f"Tip amount is {tip}")
    print(f"Total amount is {total}")
elif service == "bad":
    tip = bill * 0.10
    total = bill + tip
    print(f"Tip amount is {tip}")
    print(f"Total amount is {total}")




# tax = Bill * 0.20 or = Bill * 0.15 or = Bill * .10





    