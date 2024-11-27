def game_result(n, cards):
    left = 0
    right = n - 1
    s_score = 0
    d_score = 0
    s_turn = True

    while left <= right:
        if cards[left] > cards[right]:
            if s_turn:
                s_score += cards[left]
            else:
                d_score += cards[left]
            left += 1
        else:
            if s_turn:
                s_score += cards[right]
            else:
                d_score += cards[right]
            right -= 1
        
        s_turn = not s_turn

    return s_score, d_score

n = int(input())
cards = list(map(int, input().split()))

s_score, d_score = game_result(n, cards)
print(s_score, d_score)
