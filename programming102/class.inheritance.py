class Mob:
    def __init__(self, name, health = 10, power = 2):
        self.name = name
        self.health = health
        self.power = power

    def get_hit(self, power):
        self.health = self.health - power
      
      
    def attack(self, enemy):
        enemy. get_hit(self.power)

class Hero(Mob):

    def __init__(self):
        super().__init__("Sir Barksalor", 22,3)
        # self.name = "Sir Barksalot"
        # self.health = 22
        # self.power = 5
        self.defense = 4

    def get_hit(self, power):
        print("Hey yall, I am gettting hit. It hurts.")
        #self.health = self.health - power
        super().get_hit(power - self.defense)
        if self.defense >= power/2:
            print("Ha Ha Ha my defense is great!")

    def yell(self):
        print("I %s, say to thou villain. Prepare to die!" % self.name)
    
    pass


class Creature(Mob):

    def grunt(self):
        print("grrrrrgrrgr")

class Orc(Creature):
    def stomp(self, enemy):
        super().grunt()
        super().attack(enemy)
        print("I'm going to stomp you")



hero =Hero()

bad_guy = Orc("Bad Guy", 10, 7)
hero.yell()
hero.attack(bad_guy)
print(bad_guy.health)

bad_guy.stomp(hero)
print(hero.health)

