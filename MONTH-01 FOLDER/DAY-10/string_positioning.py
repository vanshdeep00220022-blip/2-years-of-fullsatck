# Day 10: Advanced String Searching and Content Positioning in Python

log_data = "STATUS:error__CODE:404__MESSAGE:resource_not_found"

# 1. Substring Searching: Finding index locations using .find()
error_index = log_data.find("404")
print(f"🔍 Substring '404' found at index position: {error_index}")

# 2. Character Metrics: Counting targeted tokens using .count()
separator_count = log_data.count("__")
print(f"📊 Total metadata block separators detected: {separator_count}")

# 3. Content Replacement: Sanitizing string data with .replace()
clean_log = log_data.replace("__", " | ")
print(f"🧼 Sanitized Live System Log: {clean_log}")