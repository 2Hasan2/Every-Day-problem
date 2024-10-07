def product_except_self(nums: list[int]) -> list[int]:
    n = len(nums)
    output = [1] * n

    left_p = 1
    right_p = 1
    for i in range(n):
        j = n - 1 - i
        output[j] *= right_p
        output[i] *= left_p
        right_p *= nums[j]
        left_p *= nums[i]

    return output


product_except_self([1, 2, 3, 4, 5, 6])
