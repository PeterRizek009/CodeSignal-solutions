import React from 'react'


const FirstDuplicate = () => {
    let a = [8, 4, 6, 2, 6, 4, 7, 9, 5, 8];

    const aStr = a.toString();
    var arr = []


    arr = a.filter((el) => aStr.indexOf(el) !== aStr.lastIndexOf(el))

    // for (let i = 0; i < a.length; i++) {
    //     if (aStr.indexOf(a[i]) !== aStr.lastIndexOf(a[i])) {
    //         arr.push(aStr.lastIndexOf(a[i]) / 2)
    //     }
    // }

    // arr.length <= 1 ? return  -1 :  return (arr[arr.length -2]);
  console.log(arr);
    if (arr.length < 1) {
        return -1;
    } else {
        console.log(arr[(arr.length/2)]);
        return (arr[(arr.length/2)]);
    }

    // if (arr.length === 0 || arr.length === 1) {
    //     console.log(-1);
    //     return -1
    // } else {
    //     console.log(a[Math.min(...arr)]);
    //     return (a[Math.min(...arr)]);
    // }

    return (<></>);
}

export default FirstDuplicate;