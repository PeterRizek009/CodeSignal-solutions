import React from 'react'


const BuildPalindrome = () => {
    let str =  "abcdc"
    let reverse = str.split("").reverse().join("");  
     
    let diff = "";

    reverse.split('').forEach((val , index) => {
        if(val !== str.charAt(index))
        diff += val;
    })

    console.log(str + diff);

    if(str === reverse){
        console.log(str);
        return str;
    }else{
        // const pattern = str.localeCompare(reverse , undefined, { sensitivity: 'base' })
        // console.log(pattern);
        // const newStr = str + reverse.slice(pattern,str.length);
        //  console.log(newStr);  
        //  return newStr;
        
    reverse.split('').forEach((val , index) => {
        if(val !== str.charAt(index))
        diff += val;
    })

    console.log(str + diff);
    return (str + diff);
    }
    return (<></>);
}

export default BuildPalindrome;