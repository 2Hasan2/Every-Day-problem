def minimum_moves_to_rbs(t, test_cases):
    results = []
    for n, s in test_cases:
        balance = 0
        min_balance = 0
        
        for char in s:
            if char == '(':
                balance += 1
            else:
                balance -= 1
            min_balance = min(min_balance, balance)
        
        results.append(abs(min_balance))
    
    return results

t = int(input())
test_cases = []
for _ in range(t):
    n = int(input())
    s = input()
    test_cases.append((n, s))

results = minimum_moves_to_rbs(t, test_cases)

for res in results:
    print(res)
