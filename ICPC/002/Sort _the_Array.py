# i hate my birthday
def can_sort_the_array(n, a):
    left, right = 0, n - 1

    while left < n - 1 and a[left] < a[left + 1]:
        left += 1

    if left == n - 1:
        print("yes")
        print(1, 1)
        return

    while right > 0 and a[right] > a[right - 1]:
        right -= 1

    # i will forget this step after two days : )
    reversed_segment = a[:left] + a[left : right + 1][::-1] + a[right + 1 :]

    if reversed_segment == sorted(a):
        print("yes")
        print(left + 1, right + 1)
    else:
        print("no")


while True:
    try:
        n = int(input())
        a = list(map(int, input().split()))
        can_sort_the_array(n, a)
    except EOFError:
        break
