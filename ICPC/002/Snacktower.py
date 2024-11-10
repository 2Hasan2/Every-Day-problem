def snack_tower(n, snacks):
    stack = []
    needed = n
    result = []

    for snack in snacks:
        stack.append(snack)
        output = []
        while stack and needed in stack:
            stack.remove(needed)
            output.append(needed)
            needed -= 1
        result.append(" ".join(map(str, output)))

    return result


while True:
    try:
        n = int(input())
        snacks = list(map(int, input().split()))
        print("\n".join(snack_tower(n, snacks)))
    except EOFError:
        break
