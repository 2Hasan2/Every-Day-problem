import unittest
from app import is_valid_parentheses


class TestBalancedParentheses(unittest.TestCase):

    def test_valid_cases(self):
        # Test case 1: Simple valid parentheses
        self.assertTrue(is_valid_parentheses("{[()]}"))  # Valid

        # Test case 2: Nested valid parentheses
        self.assertTrue(is_valid_parentheses("([{}])"))  # Valid

        # Test case 3: Complex nested valid parentheses
        self.assertTrue(is_valid_parentheses("(([]){})"))  # Valid

        # Test case 4: Mixed types valid
        self.assertTrue(is_valid_parentheses("{[()]}"))  # Valid

        # Test case 5: Empty string (considered valid)
        self.assertTrue(is_valid_parentheses(""))  # Valid

    def test_invalid_cases(self):
        # Test case 6: Mismatched parentheses
        self.assertFalse(is_valid_parentheses("{[(])}"))  # Invalid

        # Test case 7: Unmatched opening parenthesis
        self.assertFalse(is_valid_parentheses("{["))  # Invalid

        # Test case 8: Unmatched closing parenthesis
        self.assertFalse(is_valid_parentheses(")}"))  # Invalid

        # Test case 9: Extra closing brackets
        self.assertFalse(is_valid_parentheses("((()))))"))  # Invalid

        # Test case 10: Mixed and unbalanced
        self.assertFalse(is_valid_parentheses("{[}"))  # Invalid


if __name__ == "__main__":
    unittest.main()
