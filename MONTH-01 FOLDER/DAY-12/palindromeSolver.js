// Day 12: Valid Palindrome Algorithm using JavaScript Native Array Mechanics
// Time Complexity: O(n) | Space Complexity: O(n)

function isPalindrome(s) {
    // 1. Sanitize string using regular expressions (Regex) and convert to lowercase
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // 2. Reverse comparison execution loop
    const reversedStr = cleanStr.split("").reverse().join("");
    
    return cleanStr === reversedStr;
}

// Test cases evaluating the runtime loop
const testString = "A man, a plan, a canal: Panama";
const result = isPalindrome(testString);
console.log(`⚡ JS Engine Verification for '${testString}': ${result}`);