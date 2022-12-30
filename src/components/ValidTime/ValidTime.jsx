import React from 'react'


const ValidTime = () => {

    let time = "24:00";

    let timArr = time.split(/[:'"/]/gi);
   let result;

//   if (timArr[0] == 24  && timArr[1] == 0 ) {
//         result =  false;
//     }else if(timArr[0] == 0  && timArr[1] > 0 ){
//         result =  false;
//     }else if(timArr[0] < 25  && timArr[1] < 61 ){
//         result =  true;
//     }else{
//         result =  false;
//     }


    console.log((timArr[0] < 25) && (timArr[1] < 60) ? true :false);
    return ((timArr[0] < 25) && (timArr[1] < 60) ? true :false);

    return ( <></> );
}
 
export default ValidTime;