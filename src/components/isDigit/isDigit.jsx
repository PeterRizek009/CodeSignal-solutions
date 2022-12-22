import React from 'react'


const IsDigit = () => {
    let symbol = '0';
  
    return  [...symbol].every((el) => /^[0-9]$/.test(el))
    return (<></>);
}

export default IsDigit;