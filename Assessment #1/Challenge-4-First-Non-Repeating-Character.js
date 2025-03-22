function firstNonRepeatingCharachter(arr){
    const numCount = {};
    
    for (let num of arr) {
        numCount[num] = (numCount[num] || 0) + 1;
    }

    for (let num of arr) {
        if (numCount[num] === 1) {
            return num;
        }
    }
}

console.log("The first non-repeating character is: " + firstNonRepeatingCharachter("swiss")); 