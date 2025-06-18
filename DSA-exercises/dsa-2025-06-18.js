//Today we solving DSA focusing on string operations
// Came accross a roman numerals question, broo, this question is very hard...but we will work it out, found out roman numerals end at 3999.. we learn everyday.

function romanToInt(s) {
    const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    s = s.toUpperCase();

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        if (next > current) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}

const s = "iv";
const output = romanToInt(s);
console.log(output);
