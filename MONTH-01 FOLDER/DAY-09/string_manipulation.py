# Day 9: Mastering String Slicing and Dynamic Layout Parsing in Python

# Sample raw data string representing complex payload logs
system_payload = "USER_ID:vanshdeep__STATUS:active__ROLE:developer"

# 1. Basic Slicing: Extracting specific segments using string[start:stop] syntax
extracted_user = system_payload[8:17]
print(f"🔑 Extracted Username: {extracted_user}")

# 2. String Reversal: A foundational algorithmic logic pattern using string[::-1]
reversed_username = extracted_user[::-1]
print(f"🔄 Algorithmic Reversal Proof: {reversed_username}")

# 3. Dynamic Parsing: Splitting unstructured tokens cleanly into array elements
parsed_elements = system_payload.split("__")
print(f"📦 Sanitized System Tokens: {parsed_elements}")