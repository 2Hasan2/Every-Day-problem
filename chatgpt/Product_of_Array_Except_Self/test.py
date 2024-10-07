import unittest
from app import product_except_self


class TestProductExceptSelf(unittest.TestCase):

    def test_case_1(self):
        # Basic test case
        self.assertEqual(
            product_except_self([1, 2, 3, 4, 5, 6]), [720, 360, 240, 180, 144, 120]
        )

    def test_case_2(self):
        # Test with a single zero
        self.assertEqual(product_except_self([1, 2, 0, 4, 5]), [0, 0, 40, 0, 0])

    def test_case_3(self):
        # Test with multiple zeros
        self.assertEqual(product_except_self([0, 1, 2, 0]), [0, 0, 0, 0])

    def test_case_4(self):
        # Test with all ones
        self.assertEqual(product_except_self([1, 1, 1, 1]), [1, 1, 1, 1])

    def test_case_5(self):
        # Test with negative numbers
        self.assertEqual(product_except_self([-1, -2, -3, -4]), [-24, -12, -8, -6])

    def test_case_6(self):
        # Test with mix of negative and positive numbers
        self.assertEqual(product_except_self([1, -2, 3, -4]), [24, -12, 8, -6])

    def test_case_7(self):
        # Test with two elements
        self.assertEqual(product_except_self([7, 3]), [3, 7])

    def test_case_8(self):
        # Test with a large array
        self.assertEqual(
            product_except_self([1, 2, 3, 4, 5, 6, 7, 8, 9]),
            [362880, 181440, 120960, 90720, 72576, 60480, 51840, 45360, 40320],
        )

    def test_case_9(self):
        # Test with an array of length 1 (invalid case but expected to handle properly)
        self.assertEqual(product_except_self([5]), [1])

    def test_case_10(self):
        # Test with a large number
        self.assertEqual(
            product_except_self([100, 200, 300, 400]),
            [24000000, 12000000, 8000000, 6000000],
        )


unittest.main(argv=[""], verbosity=2, exit=False)
