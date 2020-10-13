message = "I am in class."
message2 = "Can't talk now."

print(message +" " +message2)


haiku = "One, two, three, four, five. \nThe bear found the beehive.\nThe bear eats the honey."
print(haiku)

person = "Will"
today = "Tuesday"
emotion = "happy"

print(
'''

Hello %s, 
I hope that your %s is going well. 
I'm personally really %s. 
''' % (person, today, emotion))

combined = f"Hello {person},\n I hope that your {today} is going well. \nI'm personally really {emotion}."

print(combined)

last = "Hello " + person + ", I hope that your " + today + " is going well. \n I'm personally really " + emotion +"."

print(last)




