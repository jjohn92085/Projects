import random

# list of quotes
shakespeare_quotes = [
    "The course of true love never did run smooth.",
    "Friends, Romans, countrymen, lend me your ears.",
    "The course of true love never did run smooth.",
    "If music be the food of love play on.",
]

# the choice method from the random module

pick_a_quote = random.choice(shakespeare_quotes)

print(pick_a_quote)
