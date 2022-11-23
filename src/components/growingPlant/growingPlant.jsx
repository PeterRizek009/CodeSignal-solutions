import React from 'react'


const GrowingPlant = () => {
    let upSpeed = 10;
    let downSpeed = 9;
    let desiredHeight = 4;
    let noOfDays = 1;
    let actualHeight = upSpeed;
    while (actualHeight < desiredHeight) {
        actualHeight += (upSpeed - downSpeed);
        noOfDays++;
    }

    console.log(noOfDays);
    return noOfDays;

    return (<>
    </>);
}

export default GrowingPlant;