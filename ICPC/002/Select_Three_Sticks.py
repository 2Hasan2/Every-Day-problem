def min_op_to_made(n: int, sticks: list[int]):
    sticks.sort()
    min_op = float("inf")

    for i in range(n - 2):
        target = sticks[i + 1]
        op = abs(sticks[i] - target) + abs(sticks[i + 2] - target)
        min_op = min(min_op, op)

    return min_op


while True:
    try:
        t = int(input())
        results = []
        for _ in range(t):
            n = int(input())
            sticks = list(map(int, input().split()))
            results.append(min_op_to_made(n, sticks))

        print("\n".join(map(str, results)))
    except EOFError:
        break
