function infected(days) {
    let total = 1; // Day 0: first computer infected

    for (let day = 1; day <= days; day++) {
        // Each day, number of infected computers doubles
        total *= 2;

        // Every 3red day, apply patch AFTER doubling
        if (day % 3 === 0) {
           let patched = Math.ceil(total * 0.2); // 20% patched, round up
        total -= patched; // reduce infected by patched amount
        }
    }
    return total;
}

// Test cases
console.log(infected(1));      //2 
console.log(infected(3));      //6
console.log(infected(8));      //152
console.log(infected(17));     //39808
console.log(infected(25));     //5217638
