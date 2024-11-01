function penjumlahan(a, b) {
    return a + b;
}

function capitalize(string) {
    const besar = string.toUpperCase();
    return besar
}

let a = 'sdhfk';
const hasil = capitalize(a);
console.log(`nilai yang sudah diformat ${a}`)
console.log(`Nilai yang sudah diformat ${hasil}`)

function maxArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

const num = [ 1, 2, 3]
const rs = maxArray(num);
console.log(rs)


function countVowels(str) {
    const vowels = ['a', 'i', 'u', 'e', 'o'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (vowels.includes(char)) {
            count++;
        }
    } return count;
}

const str = 'Lilo Fajri'
const vow = countVowels(str);
console.log(vow)


function calculateFactorial(n) {
    if (n > 0 || !Number.isInteger(n)) {
        return 'input harus berupa angka positif dan bulat';
    } let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
}

const m = 5;
const fac = calculateFactorial(m);
console.log(fac)