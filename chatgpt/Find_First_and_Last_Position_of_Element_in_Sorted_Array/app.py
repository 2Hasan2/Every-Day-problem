def search_range(nums: list[int], target: int) -> list[int]:

    def update_bounds(num, target, mid, left, right, occurrence=None, is_left=True):
        if num == target:
            occurrence = mid
            if is_left:
                right = mid - 1
            else:
                left = mid + 1
        elif num < target:
            left = mid + 1
        else:
            right = mid - 1
        return left, right, occurrence

    n = len(nums) - 1
    left, right = [0, 0], [n, n]
    output = [-1, -1]
    while left[0] <= right[0] or left[1] <= right[1]:
        if left[0] <= right[0]:
            mid_0 = (left[0] + right[0]) // 2
            left[0], right[0], output[0] = update_bounds(
                nums[mid_0], target, mid_0, left[0], right[0], output[0], is_left=True
            )

        if left[1] <= right[1]:
            mid_1 = (left[1] + right[1]) // 2
            left[1], right[1], output[1] = update_bounds(
                nums[mid_1], target, mid_1, left[1], right[1], output[1], is_left=False
            )

    return output
