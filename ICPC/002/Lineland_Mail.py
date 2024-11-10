while True:
    try:
        n = int(input())
        x = list(map(int, input().split()))

        for i in range(n):
            if i == 0:
                mini = abs(x[i] - x[i + 1])
            elif i == n - 1:
                mini = abs(x[i] - x[i - 1])
            else:
                mini = min(abs(x[i] - x[i - 1]), abs(x[i] - x[i + 1]))

            maxi = max(abs(x[i] - x[0]), abs(x[i] - x[n - 1]))
            print(mini, maxi)

    except EOFError:
        break
