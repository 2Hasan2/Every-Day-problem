MOD = 998244353

memo = {}


def count_ways(sequence):
    if len(sequence) == 1:
        result = [0] * 10
        result[sequence[0]] = 1
        return result

    if tuple(sequence) in memo:
        return memo[tuple(sequence)]

    result = [0] * 10

    for i in range(1, len(sequence)):
        x, y = sequence[0], sequence[i]

        # F: (x + y) % 10
        new_seq = sequence[1:i] + [(x + y) % 10] + sequence[i + 1 :]
        ways_f = count_ways(new_seq)

        # G: (x * y) % 10 => i have no idea way ..but i need the first digit only : )
        new_seq = sequence[1:i] + [(x * y) % 10] + sequence[i + 1 :]
        ways_g = count_ways(new_seq)

        for j in range(10):
            result[j] = (result[j] + ways_f[j] + ways_g[j]) % MOD

    memo[tuple(sequence)] = result
    return result


while True:
    try:
        N = int(input())
        A = list(map(int, input().split()))

        result = count_ways(A)

        for k in range(10):
            print(result[k])
    except EOFError:
        break
