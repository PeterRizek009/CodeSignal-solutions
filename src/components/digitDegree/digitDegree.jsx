import React from 'react'


const DigitDegree = () => {

    // let str =  Array.from(String(n), Number);
    // let result = 0;
    // if(str.length <= 1){
    //     return 0;
    // }else{
    //    for (let i = 0; i < str.length; i++) {
    //     result += str[i];
    //    }
        
    // }
    // let num =Array.from(String(result), Number);
    // console.log(num.length);
    // return num.length;
    let n = 777773;
    let result = 0;
    if (n <= 9) {
        return result;
    } else {
        while (true) {
            result++
            n = n.toString().split("").reduce((a, b) => {
                
                return parseInt(a) + parseInt(b);
                
            });

            if(n <= 9){
                break;
            }
        }

    }
    console.log(n);
    return result;
    return (<></>);
}

export default DigitDegree;