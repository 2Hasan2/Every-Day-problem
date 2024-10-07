def is_valid_parentheses(s: str) -> bool:
    if len(s) % 2 != 0:
        return False
    buckets = {"[": "]", "{": "}", "(": ")"}
    stack = []
    for bucket in s:
        if bucket in buckets:
            stack.append(bucket)
        elif stack and buckets[stack[-1]] == bucket:
            stack.pop()
        else:
            return False
    return not stack


print(is_valid_parentheses(")}"))
