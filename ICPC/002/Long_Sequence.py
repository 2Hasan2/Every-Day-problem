def long_sequence(N, B, rep):
    MAX_VALUE = sum(B)
    full_periods, remaining = divmod(rep, MAX_VALUE)
    min_value = full_periods * N

    for num in B:
        if remaining <= 0:
            break
        remaining -= num
        min_value += 1

    return min_value


while True:
    try:
        N = int(input())
        B = list(map(int, input().split()))
        rep = int(input())
        print(long_sequence(N, B, rep))
    except EOFError:
        break
