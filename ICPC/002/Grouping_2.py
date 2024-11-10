while True:
    try:
        N = int(input())
        print(N // 3 if N % 3 != 1 else N // 3 - 1 + 1)
    except EOFError:
        break
