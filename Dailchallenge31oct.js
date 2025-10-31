function spookify(str) {
    // Step 1: Replace underscores and hyphens with tildes
    str = str.replace(/[_-]/g, "~");

    let result = "";
    let capitalize = true; // Start with uppercase

    // Step 2: Loop through each character
    for (let ch of str) {
        if (ch === "~") {
            // Skip toggling case on tilde
            result += "~";
        } else {
            // Always base on lowercase, then apply alternating case
            result += capitalize ? ch.toUpperCase() : ch.toLowerCase();
            capitalize = !capitalize; // Flip after each letter
        }
    }

    return result;
}

console.log(spookify("hello_world"));
// -> HeLlO~wOrLd

console.log(spookify("Spooky_Case"));
// -> SpOoky~CaSe

console.log(spookify("TRICK-or-TREAT"));
// -> TrIcK~oR~tReAt

console.log(spookify("c_a-n_d-y_-b-o_w_l"));
// -> C~a~N~d~Y~~b~O~W~L

console.log(spookify("thE_hAUntEd-hOUsE-Is-FUll-Of_ghOsts"));
// -> ThE~hAuNtEd~HoUsE~iS~fUlL~of~gHoStS
