#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'countApplesAndOranges' function below.
#
# The function accepts following parameters:
#  1. INTEGER s -> start point for the house
#  2. INTEGER t -> end point for thr house
#  3. INTEGER a -> apple tree position
#  4. INTEGER b -> orange tree position
#  5. INTEGER_ARRAY apples -> apples position
#  6. INTEGER_ARRAY oranges -> oranges position 
#

def countApplesAndOranges(s, t, a, b, apples, oranges):
    def counter(fruits, tree):
        return len([(tree + fruit) for fruit in fruits if (tree + fruit) in range(s, t +1)])

    print(counter(apples, a))
    print(counter(oranges, b))




if __name__ == '__main__':
    first_multiple_input = input().rstrip().split()

    s = int(first_multiple_input[0])

    t = int(first_multiple_input[1])

    second_multiple_input = input().rstrip().split()

    a = int(second_multiple_input[0])

    b = int(second_multiple_input[1])

    third_multiple_input = input().rstrip().split()

    m = int(third_multiple_input[0])

    n = int(third_multiple_input[1])

    apples = list(map(int, input().rstrip().split()))

    oranges = list(map(int, input().rstrip().split()))

    countApplesAndOranges(s, t, a, b, apples, oranges)
