def is_valid_rbs(s):
    open_count = s.count('(')
    close_count = s.count(')')
    question_count = s.count('?')
    
    if open_count != 1 or close_count != 1:
        return "NO"
    
    n = len(s)
    half_needed = (n - 2) // 2
    
    if half_needed >= 0 and half_needed <= question_count:
        balance = 0
        for char in s:
            if char == '(' or (char == '?' and half_needed > 0):
                balance += 1
                if char == '?':
                    half_needed -= 1
            else:
                balance -= 1
            if balance < 0:
                return "NO"
        
        if balance == 0:
            return "YES"
        else:
            return "NO"
    else:
        return "NO"

t = int(input())
for _ in range(t):
    s = input().strip()
    print(is_valid_rbs(s))
