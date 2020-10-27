# class Mob:
#     def __init__(self, name, health = 10, power = 2):
#         self.name = name
#         self.health = health
#         self.power = power

#     def get_hit(self, power):
#         self.health = self.health - power
#         print(f"I {self.name} was hit for {power} points and now have:\n{self.health} health")
#     def attack(self, enemy):
#         enemy. get_hit(self.power)



# bad_guy = Mob("Evil Man", 10, 3)

# hero =Mob("Sir Barksalot", 30, 4)


# print(hero.health)
# bad_guy.attack(hero)

# hero.attack(bad_guy)
# hero.attack(bad_guy)
# hero.attack(bad_guy)



#*****NEED TO GO BACK AND WATCH THE RECORDING******

class Vehicle:
    def __init__(self, top_speed,acceleration, wheels = 4):

        
        self.speed = 0
        self.top_speed = top_speed
        self.position = 0
        self.acceleration = acceleration
        self.wheels = wheels
        # self.race_stats = []
        
    
    def move(self):
        self.accelerate()
        self.position += self.speed
        # self.race_stats.append({"Speed" : self.speed,"Position" : self.position})
        
    
    def accelerate(self):
        self.speed =+ self.acceleration
        if self.speed > self.top_speed:
            self.speed = self.top_speed

    def reset(self):
        self.position = 0
        self.speed = 0

all_cars = {
    "jeep" : Vehicle(100, 4),
    "escalade" : Vehicle(80, 6),
    "mustang" : Vehicle(60, 2),
    "mini" : Vehicle(120, 5)
}


print("20 Second run")

def race_time(time):
    for car_name in all_cars:
        all_cars[car_name]

    for i in range(time):
       
        for car_name in all_cars:
            all_cars[car_name].move()
        
      

for car_name in all_cars:
    print(f"{car_name} - {all_cars[car_name].position}")



# for car_name in all_cars:
#     print(f" {car_name}:")
#     print(all_cars[car_name].position)
    



