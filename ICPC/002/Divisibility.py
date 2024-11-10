import math


# the two years in the engineering college final pay off
def lcm(a, b):
    return abs(a * b) // math.gcd(a, b)


def lcm_range(start, end):
    result = 1
    for i in range(start, end + 1):
        result = lcm(result, i)
    return result


n = int(input())

lcm_2_to_10 = lcm_range(2, 10)

count = n // lcm_2_to_10

print(count)
