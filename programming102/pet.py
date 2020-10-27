class Pet: #creating class
    def __init__(self, name, fullness = 50, happiness = 50, hunger=5, mopiness=5): # defining class (don't forget self!)
        self.name = name  #can make these default arugment values
        self.fullness = fullness
        self.happiness = happiness
        self.hunger = hunger
        self.mopiness = mopiness
    
    def eat_food(self): #defining new methods
        self.fullness += 30

    def get_love(self):
        self.happiness += 30

    def be_alive(self): #added be_alive (encapsulation)
        self.fullness -= self.hunger  #specialized with parameters
        self.happiness -= self.mopiness


class CuddlyPet(Pet): #new subclass of superclass parent Pet via inheritance
    def __init__(self, name, fullness=50, hunger=5, cuddle_level=1):
        super().__init__(name,fullness, 100, hunger, 1)
        self.cuddle_level = cuddle_level #additional arguments added above
    
    # def __init__(self, name, fullness=50, happiness=50, hunger=5, mopiness=5):
    #     self.name = name
    #     self.fullness = fullness
    #     self.happiness = 100          #can also override the __init__()
    #     self.hunger = hunger
    #     self.mopiness = 1
    
    def be_alive(self): #creating an override of an existing method
        self.fullness -= self.hunger
        self.happiness -= self.mopiness/2

    def __str__(self): #adding string to make it more readable
        return"""
        %s:
        Fullness: %d
        Happiness: %d
        """ % (self.name, self.fullness, self.happiness)

    
   
#     def cuddle(self, other_pet):
#         # Super cuddle powers, activate!
#         for i in range(self.cuddle_level): #not sure why i is error
#             other_pet.get_love()
        
#         other_pet.get_love()

# benji = CuddlyPet("Benji", 50, 20, 20, 1) # cuddle() method in new subclass
# cujo = Pet("Cujo", 50, 10, 30, 10)
# print(cujo.happiness)
# # 10 because 
# benji.cuddle(cujo)
# print(cujo.happiness)
# 40 (+30)

# benji = CuddlyPet("Benji", 50, 20, 20, 1) 
# print(benji.fullness, benji.happiness) #instantiate Cuddlypet with same arguments

# benji.be_alive()
# print(benji.fullness, benji.happiness)





        

    

# cujo = Pet("Cujo", 50, 20, 20, 1) # assigning values to attributes
# benji = Pet("Benji", 50, 100, 20, 1)
# clifford = Pet("Old Yeller", 50, 20, 20, 1)


# cujo.eat_food()
# print(cujo.fullness) 
# # 80 because cujo is eating 30 + 50
# print(cujo.happiness)
# #20 (have not changed original happiness measure)
# benji = Pet("Benji", 50, 100)
# benji.get_love()
# print(cujo.fullness) #80 (50+30) same as above
# print(benji.happiness) # 130  (100 + 30) after callling cenji.happiness




