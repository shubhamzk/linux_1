function isValidNumber(str, base) {
    if (base < 2 || base > 36) return false; // base out of range

    str = str.toUpperCase(); // make case-insensitive

    for (let char of str) {
        let value;
        if (char >= '0' && char <= '9') {
            value = char.charCodeAt(0) - '0'.charCodeAt(0);
        } else if (char >= 'A' && char <= 'Z') {
            value = char.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
        } else {
            return false; // invalid character
        }

        if (value >= base) return false; // not allowed in this base
    }

    return true;
}

// Test cases
console.log(isValidNumber("10101", 2));     // true
console.log(isValidNumber("10201", 2));     // false
console.log(isValidNumber("76543210", 8));  // true
console.log(isValidNumber("9876543210", 8)); // false
console.log(isValidNumber("9876543210", 10));  // true
console.log(isValidNumber("ABC", 10));    //false
console.log(isValidNumber("ABC", 16));    // true
console.log(isValidNumber("Z:, 36"));      // true
console.log(isValidNumber("ABC", 20));    // true
console.log(isValidNumber("4B4BA9", 16)); // true
console.log(isValidNumber("5G3F8F", 16)); // false
console.log(isValidNumber("5G3F8F", 17)); // true
console.log(isValidNumber("abc", 10));  // false
console.log(isValidNumber("abc", 16));  // true
console.log(isValidNumber("ABC", 16));   // true
console.log(isValidNumber("z", 36));     // true

