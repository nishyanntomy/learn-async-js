function logRowsWithNegativeNumbers(arr) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(arr)) {
            const rowPromises = arr.map(row => {
                return new Promise((rowResolve, rowReject) => {
                    setTimeout(() => {
                        if (row.some(num => num < 0)) {
                            console.log('Row with negative number:', row);
                            rowResolve(row);
                        } else {
                            rowReject('Row does not have negative numbers');
                        }
                    }, 0);
                });
            });

            Promise.any(rowPromises)
                .then(rowWithNegative => {
                    resolve(rowWithNegative);
                })
                .catch(allRowsPositiveError => {
                    console.error('All rows are positive:', allRowsPositiveError);
                    reject('All rows are positive');
                });
        } else {
            console.log('Rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }

    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const rowCheckPromise = logRowsWithNegativeNumbers(array2D);
