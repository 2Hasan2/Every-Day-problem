#!/usr/bin/python3
import random


def is_prime(num, k=5):
    if num <= 1:
        return False
    if num <= 3:
        return True
    if num % 2 == 0:
        return False

    # Write num as d*2^r + 1
    r = 0
    d = num - 1
    while d % 2 == 0:
        r += 1
        d //= 2

    # Witness loop
    for _ in range(k):
        a = random.randint(2, num - 2)
        x = pow(a, d, num)
        if x == 1 or x == num - 1:
            continue
        for _ in range(r - 1):
            x = pow(x, 2, num)
            if x == num - 1:
                break
        else:
            return False

    return True


def get_first_20_perfect_numbers(num):
    perfect_numbers = []
    p = 2
    while len(perfect_numbers) < num:
        if is_prime((1 << p) - 1):
            num = (1 << (p - 1)) * ((1 << p) - 1)
            perfect_numbers.append(num)
            print(num)
        p += 1
    return perfect_numbers


if __name__ == "__main__":
    get_first_20_perfect_numbers(20)
