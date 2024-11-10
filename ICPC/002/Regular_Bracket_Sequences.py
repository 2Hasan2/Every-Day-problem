def generate_bracket_sequences(n):
    sequences = []
    for i in range(1, n + 1):
        sequence = "(" * i + ")" * i + "()" * (n - i)
        sequences.append(sequence)

    return sequences


while True:
    try:
        t = int(input())
        for _ in range(t):
            n = int(input())
            sequences = generate_bracket_sequences(n)
            for seq in sequences:
                print(seq)
    except EOFError:
        break
