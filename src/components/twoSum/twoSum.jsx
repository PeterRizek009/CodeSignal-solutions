import React from 'react';

const TwoSum = () => {

    let nums = [-1, -2, -3, -4, -5]
    let target = -8;
    let result = [];
    let temp = nums[0]

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (temp + nums[j] === target && nums.indexOf(temp) !== j) {
                console.log([i ,j]);
                return [i, j];
            }
            
        }
        temp = nums[i+1]

    }


    console.log(result);
    return result;



    //console.log(result);


    return (<></>);
}

export default TwoSum;