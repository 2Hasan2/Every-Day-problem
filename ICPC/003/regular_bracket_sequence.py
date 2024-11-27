def max_length_rbs(s):
    balance = 0 
    matched_pairs = 0  
    
    for char in s:
        if char == '(':
            balance += 1
        elif balance > 0: 
            balance -= 1
            matched_pairs += 1

    return matched_pairs * 2

s = input().strip()

print(max_length_rbs(s))
