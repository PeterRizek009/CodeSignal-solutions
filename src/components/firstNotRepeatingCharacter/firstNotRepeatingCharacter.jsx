import React from 'react'


const FirstNotRepeatingCharacter = () => {
    const s =  "abacabad";

   const result = ([...s].filter((el) => s.indexOf(el)  === s.lastIndexOf(el)));
    //    s.find(s[0])
    //  return s.fliter((el) =>  )

   return result.length === 0 ? "_" : result[0];
   
    return (<></>);
}

export default FirstNotRepeatingCharacter;