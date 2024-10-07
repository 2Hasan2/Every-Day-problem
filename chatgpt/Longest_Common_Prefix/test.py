import unittest
from app import longest_common_prefix


class TestLongestCommonPrefix(unittest.TestCase):

    def test_common_prefix(self):
        # Test case 1: Simple common prefix
        self.assertEqual(longest_common_prefix(["flower", "flow", "flight"]), "fl")

        # Test case 2: Common prefix with different lengths
        self.assertEqual(longest_common_prefix(["apple", "app", "apricot"]), "ap")

        # Test case 3: Entire string is a prefix
        self.assertEqual(longest_common_prefix(["test", "testcase", "tester"]), "test")

    def test_no_common_prefix(self):
        # Test case 4: No common prefix
        self.assertEqual(longest_common_prefix(["dog", "racecar", "car"]), "")

        # Test case 5: Completely different strings
        self.assertEqual(longest_common_prefix(["abc", "def", "ghi"]), "")

    def test_edge_cases(self):
        # Test case 6: Empty list
        self.assertEqual(longest_common_prefix([]), "")

        # Test case 7: Single string in the list
        self.assertEqual(longest_common_prefix(["single"]), "single")

        # Test case 8: One empty string in the list
        self.assertEqual(longest_common_prefix(["", "nonempty"]), "")

        # Test case 9: Long strings with common prefix
        self.assertEqual(
            longest_common_prefix(["longprefix", "longprefixed", "longprefixes"]),
            "longprefix",
        )

        # Test case 10: All strings are empty
        self.assertEqual(longest_common_prefix(["", "", ""]), "")


if __name__ == "__main__":
    unittest.main()
