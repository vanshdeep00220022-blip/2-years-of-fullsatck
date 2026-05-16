# --------------------------------------------------------
# 1. THE MATH OPERATORS (Arithmetic)
# --------------------------------------------------------
# Think of these just like normal math calculator buttons.

apples = 10
bananas = 3

# Adding (+)
total_fruit = apples + bananas  # 10 + 3
print("Total fruit:", total_fruit)

# Leftovers / Modulus (%) 
# This divides the numbers and ONLY gives you the remainder left over.
# 10 divided by 3 is 3, with 1 left over.
leftover_apples = apples % bananas  # Remainder of 10 / 3
print("Leftover after dividing:", leftover_apples)

# Power / Exponent (**)
# This multiplies a number by itself. 3 to the power of 2 (3 x 3)
squared_bananas = bananas ** 2
print("Bananas squared (3x3):", squared_bananas)


# --------------------------------------------------------
# 2. THE SHORTCUT OPERATOR (Assignment)
# --------------------------------------------------------
# Instead of writing "days = days + 1", you can use a shortcut "+="

days_completed = 2
print("\nStarted today at Day:", days_completed)

# This adds 1 to the current number inside the box
days_completed += 1  
print("Added today's work! Now at Day:", days_completed)


# --------------------------------------------------------
# 3. THE TRUTH TESTERS (Comparison)
# --------------------------------------------------------
# These ask the computer a question. The answer is ALWAYS "True" or "False".

my_score = 95
passing_score = 40

# Is my score greater than the passing score? ( > )
did_i_pass = my_score > passing_score
print("\nDid I pass the test?", did_i_pass) # Will print: True

# Is my score exactly equal to passing? ( == )
# Note: We use TWO equals signs to ask "is it equal?" because ONE equals sign is used to save variables.
am_i_exactly_at_border = (my_score == passing_score)
print("Is my score exactly 40?", am_i_exactly_at_border) # Will print: False


# --------------------------------------------------------
# 4. MAKING A DECISION (If Statement)
# --------------------------------------------------------
# We use the truth testers to make the computer make a choice.

if days_completed > 1:
    print("\nMessage: You are officially past Day 1. Keep the streak going!")
else:
    print("\nMessage: Welcome to Day 1!")