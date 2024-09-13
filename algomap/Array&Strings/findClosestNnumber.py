#!/usr/bin/python3
from typing import List
class Solution(object):

    def findClosestNumber(self, nums: List[int]) -> int:
        """
        :type nums: List[int]
        :rtype: int
        """
        return sorted(nums, key=lambda x: (abs(x), -x))[0]
