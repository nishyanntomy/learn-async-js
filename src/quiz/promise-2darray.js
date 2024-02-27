function sum2DArray(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if (Array.isArray(arr)) {
            const rowPromises = arr.map(row => {
                return new Promise((rowResolve, rowReject) => {
                    setTimeout(() => {
                        const rowSum = row.reduce((acc, num) => acc + num, 0);
                        console.log(`Row sum calculated: ${rowSum}`);
                        rowResolve(rowSum);
                    }, 0);
                });
            });

            Promise.all(rowPromises)
                .then(rowSums => {
                    const totalSum = rowSums.reduce((acc, rowSum) => acc + rowSum, 0);
                    console.log('Resolving with total sum ...');
                    resolve(totalSum);
                })
                .catch(error => {
                    console.error('Error during parallel sum calculations:', error);
                    reject(error);
                });
        } else {
            console.log('Rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('Returning from sum');
    });
}


// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumPromise1 = sum2DArray(array2D);
sumPromise1.then((result) => {
    console.log('Result from sumPromise1:', result);
}).catch((error) => {
    console.error('Error from sumPromise1:', error);
});

const sumPromise2 = sum2DArray('array2D');
sumPromise2.then((result) => {
    console.log('Result from sumPromise2:', result);
}).catch((error) => {
    console.error('Error from sumPromise2:', error);
});
