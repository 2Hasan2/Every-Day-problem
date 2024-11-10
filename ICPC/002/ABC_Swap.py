while True:
    try:
        X, Y, Z = map(int, input().split())
        print(Z, X, Y)
    except EOFError:
        break
