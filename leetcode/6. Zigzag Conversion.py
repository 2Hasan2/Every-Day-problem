def printList(arr: list):
    for ele in arr:
        print(ele)

def wave_value(num: int, index: int) -> int:
    wave_length = 2 * num
    
    position = index % wave_length
    
    if position <= num:
        return position 
    else:
        return wave_length - position


def convert(s: str, numRows: int) -> str:
    strings = ["" for _ in range(numRows) ]
    for i in range(len(s)):
        level = wave_value(numRows - 1, i)
        strings[level] += s[i]
    return "".join(strings)

print(convert("abcdefg", 4))



# def wave_value(num, index):
#     # Calculate the position in the pattern
#     pos = index % (2 * num)  # Find the position in the 0 to 2 * num range
#     return num - abs(num - pos)  # Adjust the position to return the correct value
