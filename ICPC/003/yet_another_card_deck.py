def process_deck(n, q, a, queries):
    color_positions = {}
    for i in range(n):
        if a[i] not in color_positions:
            color_positions[a[i]] = i + 1  
    
    result = []
    for color in queries:
        pos = color_positions[color]
        result.append(pos)
        
        for key in color_positions:
            if color_positions[key] < pos:
                color_positions[key] += 1
        color_positions[color] = 1  
    
    return result

n, q = map(int, input().split())
a = list(map(int, input().split()))
queries = list(map(int, input().split()))

output = process_deck(n, q, a, queries)
print(" ".join(map(str, output)))
