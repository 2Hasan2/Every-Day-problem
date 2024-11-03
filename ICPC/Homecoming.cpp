#include <iostream>
#include <string>

using namespace std;

int main()
{
    long long t;
    cin >> t;

    for (long long c = 1; c <= t; ++c)
    {
        long long bCost, tCost, budget;
        string s;

        cin >> bCost >> tCost >> budget >> s;

        long long pos = 1;
        char lastT = 'C';

        for (int i = s.size() - 2; i >= 0; --i)
        {
            if (s[i] != lastT)
            {
                if (s[i] == 'A' && budget >= bCost)
                {
                    budget -= bCost;
                }
                else if (s[i] == 'B' && budget >= tCost)
                {
                    budget -= tCost;
                }
                else
                {
                    pos = i + 2;
                    break;
                }
                lastT = s[i];
            }
        }

        cout << pos << '\n';
    }

    return 0;
}
