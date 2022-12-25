import React from 'react';



const DeleteDigit = () => {
    let n = 222250;
    let number =  [...`${n}`].map(Number);

 
    if(number.length > 3){
        if (number[number.length -1 ] === 0){
            if(number[number.length -2] > number[number.length -3]){
                number =  number.slice(1);
                console.log(number);
            }
        }
    }
        // let minNum=  Math.min(...number)
            delete number[number.indexOf(Math.min(...number))];
        const firstCheck  = Number(number.join(''));

       console.log(delete number[number.indexOf(Math.min(...number))]); 
           
        console.log(firstCheck);
        return firstCheck;
    
    
    
    return (<></>);
}

export default DeleteDigit;