bill = float(input("Total bill amount?\n"))

service = input("Service level: good, fair, or bad?\n")

split = int(input("Split how many ways?\n"))
if service == "good":
    
    tip = bill * 0.20
    total = (bill + tip) / split
    print(f"Tip amount is {tip}")
    print(f"Total amount per person is {total}")
elif service == "fair":
    tip = bill * 0.15
    total = (bill + tip) / split
    print(f"Tip amount is {tip}")
    print(f"Total amount per person is {total}")
elif service == "bad":
    tip = bill * 0.10
    total = (bill + tip) / split
    print(f"Tip amount is {tip}")
    print(f"Total amount per person is {total}")