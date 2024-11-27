#include <iostream>
#include <deque>
#include <vector>

using namespace std;

int main()
{
    int n;

    while (cin >> n && n != 0)
    {
        deque<int> deck;
        vector<int> discarded;

        for (int i = 1; i <= n; ++i)
        {
            deck.push_back(i);
        }

        while (deck.size() > 1)
        {
            discarded.push_back(deck.front());
            deck.pop_front();
            deck.push_back(deck.front());
            deck.pop_front();
        }

        cout << "Discarded cards: ";
        if (!discarded.empty())
        {
            for (size_t i = 0; i < discarded.size(); ++i)
            {
                if (i > 0)
                    cout << ", ";
                cout << discarded[i];
            }
        }
        cout << endl;

        cout << "Remaining card: " << deck.front() << endl;
    }

    return 0;
}
