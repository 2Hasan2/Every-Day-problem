#!/usr/bin/python3
def solution(text:str, ending:str)->bool:
    return text.endswith(ending)

print(solution('abc', 'bc'))
