def has_non_overlapping_ab_ba(s: str):
    ab_index = s.find("AB")
    if ab_index != -1 and "BA" in s[ab_index + 2 :]:
        return "YES"

    ba_index = s.find("BA")
    if ba_index != -1 and "AB" in s[ba_index + 2 :]:
        return "YES"

    return "NO"


while True:
    try:
        s = input().strip()
        print(has_non_overlapping_ab_ba(s))
    except EOFError:
        break
