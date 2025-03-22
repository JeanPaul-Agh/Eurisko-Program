function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;   
}

const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];

console.log("The missing number is: " + findMissingNumber(arr));