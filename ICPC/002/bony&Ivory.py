def can_break_shield(a, b, c):
    for x in range(c // a + 1):
        remaining_damage = c - a * x
        if remaining_damage % b == 0:
            return "Yes"
    return "No"


while True:
    try:
        a, b, c = map(int, input().split())
        print(can_break_shield(a, b, c))
    except EOFError:
        break
