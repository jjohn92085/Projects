# import the built-in random module for Python
import random

# get user input

input = input("Please enter your name ")

# make the string input into a list

list = list(input)

# convert to a list

random.shuffle(list)

# the shuffled list is converted back into a string

scrambled = "".join(list)

print(scrambled)
