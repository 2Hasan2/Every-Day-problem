def is_valid_dice_tower(n, x, side_faces):
    top = x

    for i in range(n):
        a, b = side_faces[i]

        if i == 0:
            if a == (7 - top) or b == (7 - top):
                return "YES"
        else:
            prev_a, prev_b = side_faces[i - 1]
            if a in (prev_a, prev_b) or b in (prev_a, prev_b):
                return "YES"

    return "NO"


while True:
    try:
        n = int(input())
        x = int(input())

        side_faces = [tuple(map(int, input().split())) for _ in range(n)]

        result = is_valid_dice_tower(n, x, side_faces)

        print(result)

    except EOFError:
        break
