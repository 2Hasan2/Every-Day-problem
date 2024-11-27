#!/usr/bin/python3
import math

def find_four_squares(n):
    for a in range(int(math.isqrt(n)) + 1):
        a2 = a * a
        if a2 > n:
            break
        remaining1 = n - a2
        
        for b in range(int(math.isqrt(remaining1)) + 1):
            b2 = b * b
            if a2 + b2 > n:
                break
            remaining2 = remaining1 - b2
            
            c = int(math.isqrt(remaining2))
            if c * c == remaining2:
                d = 0  
                return a, b, c, d

    return None


t = int(input("Enter the number of test cases: "))
for _ in range(t):
    n = int(input().strip())
    result = find_four_squares(n)
    if result:
        print(f"Solution for {n}: {result[0]}^2 + {result[1]}^2 + {result[2]}^2 + {result[3]}^2")
    else:
        print("No solution found.")
