def getMax(operations):
    stack = []
    max_stack = []
    results = []

    for operation in operations:
        parts = operation.split()
        op = parts[0]

        if op == "1":
            x = int(parts[1])
            stack.append(x)
            if not max_stack or x > max_stack[-1]:
                max_stack.append(x)
            else:
                max_stack.append(max_stack[-1])

        elif op == "2":
            if stack:
                stack.pop()
                max_stack.pop()

        elif op == "3":
            if max_stack:
                results.append(max_stack[-1])

    return results

n = int(input())
operations = [input().strip() for _ in range(n)]

results = getMax(operations)
for result in results:
    print(result)
