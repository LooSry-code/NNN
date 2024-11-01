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