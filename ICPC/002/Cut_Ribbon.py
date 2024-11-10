def max_ribbon_pieces(n, a, b, c):
    dp = [-1] * (n + 1)
    dp[0] = 0

    # i really don't like the dp solution
    # but it works and it's faster than brute force
    for i in range(1, n + 1):
        if i >= a and dp[i - a] != -1:
            dp[i] = max(dp[i], dp[i - a] + 1)
        if i >= b and dp[i - b] != -1:
            dp[i] = max(dp[i], dp[i - b] + 1)
        if i >= c and dp[i - c] != -1:
            dp[i] = max(dp[i], dp[i - c] + 1)

    return dp[n]


n, a, b, c = map(int, input().split())

print(max_ribbon_pieces(n, a, b, c))
