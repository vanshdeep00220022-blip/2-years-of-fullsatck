// 🔑 Day 27: Random Password Generator Utility
function generatePassword(length, useNumbers = true, useSymbols = true) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    // Dynamically append character sets based on choices
    if (useNumbers) charset += "0123456789";
    if (useSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><=";
    
    let password = "";
    
    // Select random characters from the pool sequentially
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    
    return password;
}

// Execution and Console Output Triggers
const securePassword = generatePassword(14, true, true);
console.log("-----------------------------------------");
console.log(`🔒 Your Secure Password: ${securePassword}`);
console.log("-----------------------------------------");