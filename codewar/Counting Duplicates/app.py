#!/usr/bin/python3
from collections import Counter
def duplicate_count(st: str)->int:
    return sum(val > 1 for val in Counter(st.lower()).values())

print(duplicate_count("abcdeaB"))