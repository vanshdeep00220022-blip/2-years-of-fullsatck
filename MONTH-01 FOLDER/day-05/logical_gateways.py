# Day 5: Advanced Access Control Matrix using Python Logical Operators

has_valid_session = True
mfa_verified = True
is_ip_blacklisted = False

# Complex logic gate check matching today's UML structural blueprint
is_access_authorized = has_valid_session and mfa_verified and not is_ip_blacklisted

if is_access_authorized:
    print("🔒 System Security Matrix: Access Granted securely.")
else:
    print("❌ System Security Matrix: Authentication block triggered.")