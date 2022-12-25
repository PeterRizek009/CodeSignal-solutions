import React from 'react'



const LineEncoding = () => {

    let s=  "aabbbc";

    let count = 0;

    let chr= s.charAt(0);
     let result = "";

    for (let i = 0; i < s.length; i++) {
        if (chr === s.charAt(i)) {
            count++;
        }else{
            count === 1 ?  result += chr : result += count +  chr;
            chr = s.charAt(i);
            count = 1;
        }      
       

    }
    count === 1 ?  result += chr : result += count +  chr;
   
      console.log(result);
      return result;

    return (<></>);
}

export default LineEncoding;