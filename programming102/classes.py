# class Person:
#     def __init__(self,name,age, height="normal"):
#         print(self)
#         print("You have initialized a new instance of person")
#         self.name = name
#         self.age = age
#         self.height = height

# will = Person("Will", 32, "tall")
# kamber = Person("Kamber", 29)

# print(f"Wow {will.name} is {will.age} years old")
# print(will.height)
# print(kamber.height)

class Vehicle:
    def __init__(self,category, wheels="4"):

        self.category = category
        self.wheels = wheels
        

car1 = Vehicle("minivan")
car2 = Vehicle("motorcycle", 2)
car3 = Vehicle("Jeep")
car4 = Vehicle("Mac Truck", 18)
car5 = Vehicle("sedan")

print(car1.category, car1.wheels)
print(car2.category, car2.wheels)
print(car3.category, car3.wheels)
print(car4.category, car4.wheels)
print(car5.category, car5.wheels)




        