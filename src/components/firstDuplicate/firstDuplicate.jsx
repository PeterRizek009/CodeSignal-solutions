import React from 'react'


const FirstDuplicate = () => {
    let a = [5, 5, 5, 5, 5];

    const aStr = a.toString();
    var arr = []


   arr = a.filter((el) => aStr.indexOf(el) !== aStr.lastIndexOf(el));
 
  

  
    if(arr.length === a.length){
        return a[0];
    }
    else if (arr.length <= 1) {
        return -1;
    } else {
        console.log(arr[(arr.length/2) -1]);
        return (arr[(arr.length/2) -1]);
    }
    return (<></>);
}

export default FirstDuplicate;