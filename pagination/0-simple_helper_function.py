#!/usr/bin/env python3
"""Write a function named index_range that takes two integer arguments page and page_size"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """index range
    """
    # Calculate the start index
    start_index = (page - 1) * page_size
    # Calculate the end index
    end_index = start_index + page_size
    return (start_index, end_index)
