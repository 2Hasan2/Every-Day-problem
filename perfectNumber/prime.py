#!/usr/bin/python3
import sys


def sieve_of_eratosthenes(limit):
    primes = [True] * (limit + 1)
    primes[0] = primes[1] = False
    p = 2
    while p * p <= limit:
        if primes[p]:
            for i in range(p * p, limit + 1, p):
                primes[i] = False
        p += 1
    return [i for i in range(limit + 1) if primes[i]]


def prime(upper_limit):
    primes = sieve_of_eratosthenes(upper_limit)
    return primes


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: ./prime <upper_limit>")
        sys.exit(1)
    upper_limit = int(sys.argv[1])
    print(prime(upper_limit))
