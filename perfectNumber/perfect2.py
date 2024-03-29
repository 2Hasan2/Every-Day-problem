#!/usr/bin/python3
import sys

from prime import prime
from factors import factor

def to_num(prime_list):
    return [2 ** (p - 1) * ((1 << p) - 1) for p in prime_list]

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: ./perfect <upper_limit>")
        sys.exit(1)
    upper_limit = int(sys.argv[1])
    numbers = to_num(prime(upper_limit))
    
    for num in numbers:
        factors = factor(num)
        if sum(factors) == num:
            print(num)