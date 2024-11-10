def palindrome_leading_zeros(N: str):
    for i in range(len(N) + 1):
        padded_N = "0" * i + N
        if padded_N == padded_N[::-1]:
            print("Yes")
            break
    else:
        print("No")


while True:
    try:
        N = input().strip()
        palindrome_leading_zeros(N)
    except EOFError:
        break
