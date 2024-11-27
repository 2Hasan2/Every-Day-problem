#include <iostream>
#include <deque>
#include <string>
#include <algorithm>

using namespace std;

int main()
{
    int Q;
    cin >> Q;

    deque<int> queue;
    string command;
    int N;

    while (Q--)
    {
        cin >> command;

        if (command == "back")
        {
            if (!queue.empty())
            {
                cout << queue.back() << '\n';
                queue.pop_back();
            }
            else
            {
                cout << "No job for Ada?" << '\n';
            }
        }
        else if (command == "front")
        {
            if (!queue.empty())
            {
                cout << queue.front() << '\n';
                queue.pop_front();
            }
            else
            {
                cout << "No job for Ada?" << '\n';
            }
        }
        else if (command == "reverse")
        {
            reverse(queue.begin(), queue.end());
        }
        else if (command == "push_back")
        {
            cin >> N;
            queue.push_back(N);
        }
        else if (command == "toFront")
        {
            cin >> N;
            queue.push_front(N);
        }
    }

    return 0;
}
