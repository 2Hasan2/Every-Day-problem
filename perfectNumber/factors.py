#!/usr/bin/python3
import sys


def factor(number):
    factors = {1}
    i = 2
    while i * i <= number:
        if number % i == 0:
            factors.add(i)
            factors.add(number // i)
        i += 1
    return sorted(factors)


def trial_division_factor(number):
    factors = {1}
    for i in range(2, int(number**0.5) + 1):
        while number % i == 0:
            factors.add(i)
            factors.add(number // i)
            number //= i
    if number > 1:
        factors.add(number)
    return sorted(factors)


def main():
    if len(sys.argv) != 2:
        print("Usage: ./factors.py <number>")
        sys.exit(1)

    n = int(sys.argv[1])
    print(trial_division_factor(n))


if __name__ == "__main__":
    main()
