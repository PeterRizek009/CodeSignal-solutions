import React from 'react'


const SumUpNumbers = () => {
    let inputString = "no digits at all";
    let inputNum = inputString.split(" ").filter((el) =>  !isNaN(el) );
    if (inputNum.length === 0) {
        return 0;
    }else{
        return  Number(inputNum.reduce((a, b) => Number(a) +  Number(b)))
    }
  

    
    return (<></>);
}

export default SumUpNumbers;