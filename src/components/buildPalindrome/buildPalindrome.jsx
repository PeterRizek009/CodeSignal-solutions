import React from 'react'


const BuildPalindrome = () => {
    let str =  "kebab"
    let reverse = str.split("").reverse().join("");     
    if(str === reverse){
        console.log(str);
        return str;
    }else if(str.length % 2 !== 0){
        let newStr =  str +  reverse.slice(1, reverse.length);
        console.log(newStr);
        return(newStr);
    }
    return (<></>);
}

export default BuildPalindrome;