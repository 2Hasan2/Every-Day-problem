#!/usr/bin/python3
def reverse_words(text:str)->str:
    words = text.split(" ")
    reversed_words = [word[::-1] for word in words]
    return  " ".join(reversed_words)

print(reverse_words("  double  spaced  words  "))
