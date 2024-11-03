#include <iostream>
#include <vector>

using namespace std;

long long minimum_moves(int n)
{
    long long total_moves = 0;
    int center = n / 2;

    for (long long i = 1; i <= center; ++i)
    {
        total_moves += i * i;
    }

    return total_moves * 8;
}

int main()
{
    int t;
    cin >> t;
    vector<int> test_cases(t);

    for (int i = 0; i < t; i++)
    {
        cin >> test_cases[i];
    }

    for (int case_num : test_cases)
    {
        cout << minimum_moves(case_num) << endl;
    }

    return 0;
}
