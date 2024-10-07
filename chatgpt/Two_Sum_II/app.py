def two_sum(numbers: list[int], target: int) -> list[int]:
    n = len(numbers)
    i = 0
    j = n - 1
    arr = []
    while i < j:
        num = numbers[i] + numbers[j]
        if num > target:
            j -= 1
        elif num < target:
            i += 1
        else:
            arr.append([i + 1, j + 1])
            i += 1
    return arr


print(two_sum([1, 2, 3, 4, 4, 5], 8))
