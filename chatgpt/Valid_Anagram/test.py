import unittest
from app import is_anagram


class TestIsAnagram(unittest.TestCase):

    def test_valid_anagrams(self):
        # Test case 1: Simple valid anagram
        self.assertTrue(is_anagram("anagram", "nagaram"))

        # Test case 2: Anagram with different letters
        self.assertTrue(is_anagram("listen", "silent"))

        # Test case 3: Anagram with same letters in different order
        self.assertTrue(is_anagram("rat", "tar"))

    def test_invalid_anagrams(self):
        # Test case 4: Not an anagram
        self.assertFalse(is_anagram("rat", "car"))

        # Test case 5: Different lengths
        self.assertFalse(is_anagram("hello", "helloo"))

    def test_edge_cases(self):
        # Test case 6: Both strings are empty
        self.assertTrue(is_anagram("", ""))

        # Test case 7: Single character anagram
        self.assertTrue(is_anagram("a", "a"))

        # Test case 8: Single character non-anagram
        self.assertFalse(is_anagram("a", "b"))

        # Test case 9: Anagrams with spaces (considering only letters)
        self.assertTrue(is_anagram("a b c", "c b a"))

        # Test case 10: Longer strings
        self.assertTrue(is_anagram("abcdefg", "gfedcba"))


if __name__ == "__main__":
    unittest.main()
