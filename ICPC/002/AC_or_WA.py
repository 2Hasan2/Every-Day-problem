while True:
    try:
        N, M = map(int, input().split())

        if M == N:
            print("Yes")
        else:
            print("No")
    except EOFError:
        break
