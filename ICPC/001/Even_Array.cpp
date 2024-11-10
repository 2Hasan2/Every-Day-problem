#include <iostream>
#include <vector>
using namespace std;

int main() {
    int t;
    cin >> t;

    while (t--) {
        int n;
        cin >> n;
        vector<int> a(n);

        for (int i = 0; i < n; ++i) {
            cin >> a[i];
        }

        int odd_mis = 0, even_mis = 0;

        for (int i = 0; i < n; ++i) {
            if (i % 2 == 0 && a[i] % 2 != 0) {
                even_mis++;
            } else if (i % 2 != 0 && a[i] % 2 == 0) {
                odd_mis++;
            }
        }

        if (even_mis == odd_mis) {
            cout << even_mis << endl;
        } else {
            cout << -1 << endl;
        }
    }

    return 0;
}
