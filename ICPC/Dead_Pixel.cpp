#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int t;
    cin >> t;

    while (t--)
    {
        int a, b, x, y;
        cin >> a >> b >> x >> y;

        int areaLeft = x * b;
        int areaRight = (a - x - 1) * b;
        int areaAbove = a * y;
        int areaBelow = a * (b - y - 1);

        int maxArea = max({areaLeft, areaRight, areaAbove, areaBelow});

        cout << maxArea << endl;
    }

    return 0;
}
