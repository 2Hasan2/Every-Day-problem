def berland_library(events):
    room = []
    max_visitors = 0
    for event in events:
        if event[0] == "+":
            room.append(event[1:])
            if len(room) > max_visitors:
                max_visitors += 1
        elif event[0] == "-":
            if not event[1:] in room:
                max_visitors += 1
                continue
            room.remove(event[1:])

    print(max_visitors)


while True:
    try:
        n = int(input())
        events = [input().strip() for _ in range(n)]
        berland_library(events)
    except EOFError:
        break
