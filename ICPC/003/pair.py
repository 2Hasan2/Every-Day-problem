def solve():
    n, m = map(int, input().split())
    pairs = [tuple(map(int, input().split())) for _ in range(m)]  # Read all pairs

    a1, b1 = pairs[0]

    def check(x, y):
        for a, b in pairs:
            if not (a == x or a == y or b == x or b == y):
                return False
        return True

    if check(a1, b1):
        print("YES")
        return

    a2, b2 = pairs[1]
    if check(a1, a2) or check(a1, b2) or check(b1, a2) or check(b1, b2):
        print("YES")
    else:
        print("NO")


if __name__ == "__main__":
    solve()