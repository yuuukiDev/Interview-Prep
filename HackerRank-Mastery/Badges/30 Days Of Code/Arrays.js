function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
        let output = "";

    for(let i = arr.length - 1; i >= 0; i--) {
        output += arr[i] + " ";
    }

    console.log(output.trim());
}
