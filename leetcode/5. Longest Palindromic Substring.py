def longestPalindrome(s: str) -> str:
    n = len(s)
    if(n <= 1) :
        return s
    dp = [[False] * n for _ in range(n)]
    start, max_len = 0, 1

    for i in range(n):
        dp[i][i] = True

    for i in range(n - 1):
        if s[i] == s[i +1]:
            dp[i][i + 1]  = True
            start, max_len = i, 2

    for length in range(3, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if s[i] == s[j] and dp[i + 1][j - 1]:
                dp[i][j] = True
                start, max_len = i, length

    return s[start : start + max_len]


longestPalindrome("aaa")