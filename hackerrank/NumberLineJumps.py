#!/bin/python3


def kangaroo(x1, v1, x2, v2):
    if v1 == v2:
        return "YES" if x1 == x2 else "NO"
    if (x2 - x1) * (v1 - v2) >= 0 and (x2 - x1) % (v1 - v2) == 0:
        return "YES"
    else:
        return "NO"
