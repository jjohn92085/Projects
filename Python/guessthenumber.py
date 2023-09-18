import random


def computer_guess_number():
    low = 1
    high = 100
    user_number = int(input("Pick a number between 1 and 100"))

    while True:
        computer_guess = random.randint(low, high)
        print(f"Computer guess: {computer_guess}")

        feedback = input(
            "Is the computer's guess too high (H), low (L), or correct (C)?"
        ).upper()

        if feedback == "C":
            print("The computer guessed correctly!")
            break
        elif feedback == "H":
            high = computer_guess - 1
        elif feedback == "L":
            low = computer_guess + 1
        else:
            print("Please enter 'H', 'L', or 'C' to provide feedback.")


if __name__ == "__main__":
    computer_guess_number()
