import React from 'react'

const DifferentSymbolsNaive = () => {
    let s = "cabca";
    let newStr = "";
   
    for (let i = 0; i < s.length; i++) {
            if (!newStr.includes(s[i])){
                newStr += (s[i])
             
            }
               
    }
    console.log(newStr.length);
    


    return (<>
    </>);
}

export default DifferentSymbolsNaive;