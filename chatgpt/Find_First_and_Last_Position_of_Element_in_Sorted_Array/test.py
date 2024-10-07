import unittest
from app import search_range

class TestSearchRange(unittest.TestCase):
    
    def test_case_1(self):
        # Target is present multiple times
        self.assertEqual(search_range([5, 7, 8, 8, 8, 9, 10], 8), [2, 4])

    def test_case_2(self):
        # Target is present once
        self.assertEqual(search_range([1, 2, 3, 4, 5], 4), [3, 3])

    def test_case_3(self):
        # Target is not present
        self.assertEqual(search_range([5, 7, 7, 8, 8, 10], 6), [-1, -1])

    def test_case_4(self):
        # Target is the only element in the array
        self.assertEqual(search_range([1], 1), [0, 0])

    def test_case_5(self):
        # Target is at the start and end of the array
        self.assertEqual(search_range([5, 5, 5, 5, 5], 5), [0, 4])

    def test_case_6(self):
        # Empty array
        self.assertEqual(search_range([], 3), [-1, -1])

    def test_case_7(self):
        # Target is at the start of the array
        self.assertEqual(search_range([2, 4, 4, 4, 4, 6, 7, 8], 2), [0, 0])

    def test_case_8(self):
        # Target is at the end of the array
        self.assertEqual(search_range([1, 2, 3, 4, 5], 5), [4, 4])

    def test_case_9(self):
        # Target is not present but within the range of numbers
        self.assertEqual(search_range([1, 2, 3, 4, 5], 6), [-1, -1])

    def test_case_10(self):
        # Target is greater than all elements in the array
        self.assertEqual(search_range([1, 2, 3, 4, 5], 10), [-1, -1])

# Run the tests
unittest.main(argv=[''], verbosity=2, exit=False)
