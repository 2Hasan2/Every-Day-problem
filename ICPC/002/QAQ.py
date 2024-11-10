def count_QAQ_subsequences(s):
    n = len(s)
    count = 0

    q_after = [0] * n
    q_count = 0

    for i in range(n - 1, -1, -1):
        q_after[i] = q_count
        if s[i] == "Q":
            q_count += 1

    for i in range(n):
        if s[i] == "Q":
            for j in range(i + 1, n):
                if s[j] == "A":
                    count += q_after[j]

    return count


while True:
    try:
        s = input().strip()
        print(count_QAQ_subsequences(s))
    except EOFError:
        break
