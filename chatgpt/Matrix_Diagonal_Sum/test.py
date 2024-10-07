import unittest
from app import diagonal_sum


class TestDiagonalSum(unittest.TestCase):

    def test_odd_size_matrix(self):
        matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        self.assertEqual(diagonal_sum(matrix, 3), 25)

    def test_even_size_matrix(self):
        matrix = [[5, 6], [7, 8]]
        self.assertEqual(diagonal_sum(matrix, 2), 26)

    def test_single_element_matrix(self):
        matrix = [[10]]
        self.assertEqual(diagonal_sum(matrix, 1), 10)

    def test_large_matrix(self):
        matrix = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25],
        ]
        self.assertEqual(diagonal_sum(matrix, 5), 117)

    def test_negative_numbers(self):
        matrix = [[-1, -2, -3], [-4, -5, -6], [-7, -8, -9]]
        self.assertEqual(diagonal_sum(matrix, 3), -25)

    def test_mixed_numbers(self):
        matrix = [[1, -2, 3], [-4, 5, -6], [7, -8, 9]]
        self.assertEqual(diagonal_sum(matrix, 3), 25)  # 1 + 5 + 9 + 3 + (-4) = 25

    def test_zero_matrix(self):
        matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        self.assertEqual(diagonal_sum(matrix, 3), 0)

    def test_large_numbers(self):
        matrix = [[1000, 2000, 3000], [4000, 5000, 6000], [7000, 8000, 9000]]
        self.assertEqual(diagonal_sum(matrix, 3), 25000)

    def test_even_larger_matrix(self):
        matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
        self.assertEqual(diagonal_sum(matrix, 4), 68)

    def test_identity_matrix(self):
        matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
        self.assertEqual(diagonal_sum(matrix, 3), 3)


if __name__ == "__main__":
    unittest.main()
