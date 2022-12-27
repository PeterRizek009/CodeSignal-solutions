import React from 'react';



const LongestWord = () => {
    let word = "You are the best!!!!!!!!!!!! CodeFighter ever!";
    word =  word.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

     let words = word.split(" ");
    let length = ((word.split(" ").map((el) => (el.length))));

    let max  =Math.max(...(length));
    
    console.log(words[(length.indexOf(max))]);
    return(words[(length.indexOf(max))])
    return (<></>);
}

export default LongestWord;