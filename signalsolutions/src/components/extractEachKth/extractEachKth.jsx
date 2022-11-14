import React from 'react'

const ExtractEachKth = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let k = 3;
    var i = k-1;
    if (k > arr.length) {
        console.log(arr);
        return arr;
    } else {
        while (i < arr.length) {
            arr.splice(i , 1);
            i += k-1;
           
                }
        // for (let i = (k-1); i < arr.length-1; i += k) {
        //     console.log(i);
        //     arr.splice(i , 1);
            
        // }

    }


    // const result = arr.filter((el,index ) => index !== k )
    console.log(arr);
    return (<>
    </>);
}

export default ExtractEachKth;