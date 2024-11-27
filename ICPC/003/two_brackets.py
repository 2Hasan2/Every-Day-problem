def max_moves(s):
    open_paren = 0
    open_brack = 0
    moves = 0
    
    for char in s:
        if char == '(':
            open_paren += 1
        elif char == ')':
            if open_paren > 0:
                open_paren -= 1
                moves += 1
        elif char == '[':
            open_brack += 1
        elif char == ']':
            if open_brack > 0:
                open_brack -= 1
                moves += 1
    
    return moves

t = int(input())

for _ in range(t):
    s = input().strip()
    print(max_moves(s))
