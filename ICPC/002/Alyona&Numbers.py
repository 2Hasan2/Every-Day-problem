while True:
    try:
        m, n = map(int, input().split())
        ans = 0
        for i in range(1, m + 1):
            ans += (n + (i % 5)) // 5
        print(ans)
    except EOFError:
        break
