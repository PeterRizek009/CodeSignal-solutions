import React from 'react'

const ArrayMaxConsecutiveSum = () => {
    let input = [2, 3, 5, 1, 6];
    let k = 2;
    let sum = 0;
    let result = [];


    if (input.length < 2) {
        return input[0];
    } else {
        for (let i = 0; i < input.length - 1; i++) {

            result.push(input.slice(i, k + i).reduce((partialSum, a) => partialSum + a, 0))
        }
        const max = result.reduce((a, b) => Math.max(a, b), -Infinity);
        console.log(max);
        return max;
    }

    return (<>
    </>);
}

export default ArrayMaxConsecutiveSum;