while True:
    try:
        N = int(input())
        print(N * (N + 1) // 2)
    except EOFError:
        break
