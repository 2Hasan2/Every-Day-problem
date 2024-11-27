#!/usr/bin/python3
import re
def is_pangram(st: str)->bool:
    setStr = "".join(set(st.lower()))
    letters = re.findall(r'[a-zA-Z]', setStr)
    return len(letters) == 26

print(is_pangram("The quick brown fox jumps over the lazy dog"))