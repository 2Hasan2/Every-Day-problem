#include <iostream>
using namespace std;

int main() {
    long long q;
    cin >> q;
    while (q--) {
        long long n;
        cin >> n;

        if (n == 1) {
            cout << 0 << endl;
            continue;
        }

        long long moves = 0;

        while (n != 1) {
            if (n % 5 == 0) {
                n = (4 * n) / 5;
                moves++;
            } else if (n % 3 == 0) {
                n = (2 * n) / 3;
                moves++;
            } else if (n % 2 == 0) {
                n = n / 2;
                moves++;
            } else {
                break;
            }
        }

        if (n != 1) {
            cout << -1 << endl;
        } else {
            cout << moves << endl;
        }
    }
    return 0;
}
