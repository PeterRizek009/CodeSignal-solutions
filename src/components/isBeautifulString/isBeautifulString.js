import React from 'react'


const IsBeautifulString = () => {
    let str = "bbbaacdafe"
    let sortedString = str.toLowerCase().split("").sort().join("");

    let lettersObj  = [
        {
        chr :  sortedString.charAt(0),
        count :1
      }]

    //   let x =[0]
    //   if (sortedString.filter(i => sortedString[i] === sortedString[i+1] )) {
    //     x[0] += 1;
    //   }
    //   else{
    //     x[1] += 1;
    //   }
   
    


//    console.log(x);
}


export default IsBeautifulString;