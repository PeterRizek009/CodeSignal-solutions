import React from 'react'


const DifferentSquares = () => {
    let matrix =
        [[1, 2, 1],
        [2, 2, 2],
        [2, 2, 2],
        [1, 2, 3],
        [2, 2, 1]];

    
    let count = 1;

    
    if (matrix.length === 1 || matrix[0].length === 1) {
        return 0
    } else {
        for (let i = 0; i < matrix[0].length; i++) {
            for (let j = 0; j < matrix.length - 1; j++) {
                if (matrix[i][j] !== matrix[i + 2][j]) {
                    count++;
                }



            }

        }
    }
    console.log(count);
    return count === 2 ? count-- : count;

    return (<></>);
}

export default DifferentSquares;