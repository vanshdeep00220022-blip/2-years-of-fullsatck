# Day 12: Valid Palindrome Algorithm using Python Two-Pointer Technique
# Time Complexity: O(n) | Space Complexity: O(1)

def is_palindrome(s: str) -> bool:
    # 1. Sanitize the string using list comprehension (Keep only alphanumeric lowercase)
    clean_chars = [char.lower() for char in s if char.isalnum()]
    
    # 2. Two-Pointer Execution Matrix
    left, right = 0, len(clean_chars) - 1
    
    while left < right:
        if clean_chars[left] != clean_chars[right]:
            return False  # Logical mismatch detected
        left += 1
        right -= 1
        
    return True

# Test cases evaluating the algorithm
test_string = "A man, a plan, a canal: Panama"
result = is_palindrome(test_string)
print(f"🐍 Python Algorithm Result for '{test_string}': {result}")