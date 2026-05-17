# --------------------------------------------------------
# DAY 03: PYTHON LOOPS PRACTICE (FOR & WHILE)
# --------------------------------------------------------

print("--- 1. FOR LOOP DEMO ---")
# A For Loop runs a specific number of times. 
# Let's count from 1 to 3 using range()
for i in range(1, 4):
    print(f"Loop running... Iteration number: {i}")

print("\n--- 2. WHILE LOOP DEMO ---")
# A While Loop runs AS LONG AS a condition is True.
# It needs a way to stop, or it runs forever!
countdown = 3

while countdown > 0:
    print(f"Countdown value: {countdown}")
    countdown -= 1  # Subtracting 1 each time so it eventually hits 0 and stops

print("Blast off! The while loop successfully ended.")