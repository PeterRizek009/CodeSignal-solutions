import React from 'react'


const LongestDigitsPrefix = () => {
     let input = " 123";
    
    
       let str =  [...input].filter((el, index) => el.match(/[a-z]/i));
       let prefix =  input.slice(0 , input.indexOf(str[0]));
       let notNumber =  [...prefix].filter((el) =>el.match(/[&\/\\#,+()$~%.'":*?<>{}]/g,'_'));
       if(str.length === 0){
        console.log(input);
        return input;
       }else if (notNumber.length > 0){
        return "";
       }else{
        console.log(prefix);
        return prefix;
       }
       
    return ( <></> );
}
 
export default LongestDigitsPrefix;