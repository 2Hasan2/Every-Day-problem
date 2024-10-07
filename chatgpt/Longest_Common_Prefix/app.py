def longest_common_prefix(strs: list[str]) -> str:
    if not strs:
        return ""
    n = min(len(s) for s in strs)
    for i in range(n):
        char = strs[0][i]
        if not min(list(map(lambda x: x[i] == char, strs))):
            return strs[0][:i]
        if i + 1 == n:
            return strs[0][: i + 1]
    return ""
