import React from 'react';



const DeleteDigit = () => {
    let n = 1001;
    let number = [...`${n}`].map(Number);


    if (number.length > 3) {
        if (number[number.length - 1] === 0) {
            if (number[number.length - 2] > number[number.length - 3]) {
                delete number[0]
                const second = Number(number.join(''));
                console.log(second);
                return second;
            }
        }
    } else {
        // let minNum=  Math.min(...number)
        delete number[number.indexOf(Math.min(...number))];
        const firstCheck = Number(number.join(''));


        console.log(firstCheck);
        return firstCheck;
    }


    return (<></>);
}

export default DeleteDigit;