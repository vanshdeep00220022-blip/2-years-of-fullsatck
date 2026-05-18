# --------------------------------------------------------
# DAY 04: PYTHON COMPARISON OPERATORS
# --------------------------------------------------------

print("--- Python Comparison Operators Running ---")

user_score = 90
passing_score = 50

# 1. Standard Comparisons
is_passing = user_score >= passing_score  # Greater than or equal to
failed = user_score < passing_score       # Less than

print(f"Did the user pass? {is_passing}")  # True
print(f"Did the user fail? {failed}")      # False

# 2. Equality Testing
# Python doesn't have === because it strictly prevents comparing strings to numbers implicitly.
stored_pin = 1234
entered_pin = 1234

is_pin_correct = (stored_pin == entered_pin)
print(f"Is the password match successful? {is_pin_correct}") # True
print(f"Is the pin wrong? {stored_pin != entered_pin}")       # False
