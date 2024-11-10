while True:
    try:
        n = int(input())
        print(n // 2 if n % 2 == 0 else -(n // 2 + 1))
    except EOFError:
        break
