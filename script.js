//input n
let n = 100;

// make array of all numbers 2 to n
let myArray = [2];
for (let i = 0; i < n-2; i++) {
    let lastNumber = myArray.length + 1;
    myArray.push(lastNumber + 1);
}

/* check if each number in the array is prime.  */

for (let i = 0; i <= n-2; i++) {

    let myArray2 = [];
    for (let i = 0; i < myArray.length - 1; i++) {
        let testVar = myArray.length + 1;
        let result = testVar % myArray[i];
        myArray2.push(result);
    }

    myArray2.sort();
    if (myArray2[0] != 0) {
    console.log(myArray.length + 1)
    }

    myArray.pop();
}