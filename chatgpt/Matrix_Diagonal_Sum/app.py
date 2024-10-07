matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
]


def diagonal_sum(matrix: list[list[int]], n: int) -> int:
    count = 0
    for i in range(n):
        count += matrix[i][i]
        if (n - 1) - i != i:
            count += matrix[i][(n - 1) - i]
    return count


print(diagonal_sum(matrix, len(matrix)))
