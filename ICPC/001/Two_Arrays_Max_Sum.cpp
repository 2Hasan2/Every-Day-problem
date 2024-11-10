#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int t;
    cin >> t;

    while (t--) {
        int n, k;
        cin >> n >> k;
        vector<int> a(n), b(n);

        for (int i = 0; i < n; ++i) {
            cin >> a[i];
        }
        for (int i = 0; i < n; ++i) {
            cin >> b[i];
        }

        sort(a.begin(), a.end());
        sort(b.rbegin(), b.rend());

        for (int i = 0; i < min(k, n); ++i) {
            if (b[i] > a[i]) {
                swap(a[i], b[i]);
            } else {
                break;
            }
        }

        int sum_a = 0;
        for (int i = 0; i < n; ++i) {
            sum_a += a[i];
        }

        cout << sum_a << endl;
    }

    return 0;
}
