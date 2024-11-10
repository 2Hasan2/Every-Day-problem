#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    string s;
    cin >> s;

    vector<int> numbers;

    for (int i = 0; i < s.size(); ++i) {
        if (s[i] != '+') {
            numbers.push_back(s[i] - '0');
        }
    }

    sort(numbers.begin(), numbers.end());

    for (int i = 0; i < numbers.size(); ++i) {
        cout << numbers[i];
        if (i < numbers.size() - 1) {
            cout << '+';
        }
    }

    return 0;
}
