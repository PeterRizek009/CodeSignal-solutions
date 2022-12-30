import React from 'react';



const LongestWord = () => {
    let word = "You are the CodeFighter best!!!!!!!!!!!! CodeFighter CodeFighter ever!";
    word =  word.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

     let words = word.split(" ");

    let wordsLength = (words.map(el => el.length)); 
    let maxWord = Math.max(...(words.map(el => el.length)));
    let index =  wordsLength.indexOf(maxWord);
    //  for (let word in words) {
    //     if (word.length > longestWord.length) {
    //         longestWord = word;
    //         lonWords.push(word)
    //     }
        
    //  }
   // console.log(wordsLength);
     console.log(words[index]);

        return words[index];
    // let length = ((word.split(" ").map((el) => (el.length))));

    // let max  =Math.max(...(length));
    
    // console.log(words[(length.indexOf(max))]);
    // return(words[(length.indexOf(max))])



   


  
 
    return (<></>);
}

export default LongestWord;