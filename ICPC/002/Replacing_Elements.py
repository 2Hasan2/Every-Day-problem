while True:
    try:
        t = int(input())

        for _ in range(t):
            n, d = map(int, input().split())

            a = list(map(int, input().split()))

            if all(x <= d for x in a):
                print("YES")
                continue
            a.sort()
            if a[0] + a[1] <= d:
                print("YES")
            else:
                print("NO")
    except EOFError:
        break
