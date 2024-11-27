def can_be_rotated(s, t):
    if len(s) != len(t):
        return "No"
    double_s = s + s
    return "Yes" if t in double_s else "No"

s = input().strip()
t = input().strip()

print(can_be_rotated(s, t))
