# Recursive function to calculate the factorial of a number
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)


def main():
    # Get the input from the user
    num = int(input("Enter a number: "))

    # Calculate the factorial using the factorial function
    result = factorial(num)

    # Print the result
    print(f"The factorial of {num} is: {result}")


if __name__ == "__main__":
    main()
