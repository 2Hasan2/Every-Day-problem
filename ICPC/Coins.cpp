#include <iostream>
using namespace std;

int main() {
    long long n, S;
    cin >> n >> S;

    long long max_coins = S / n;
    long long remaining = S % n;

    long long total_coins = (!remaining) ? max_coins : max_coins + 1;

    cout << total_coins << endl;

    return 0;
}
