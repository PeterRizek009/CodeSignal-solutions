import React from 'react';


const FirstDigit = () => {

    
    const solution =(str) =>{

        let result = ([...str].reverse()).filter((el) => el.match(/\d+/))

        result = [...result]
        if (result.length > 1) {
            console.log(result[result.length - 1]);
            return (result[result.length - 1]);
        } else {
            console.log(result[0])
            return (result[0])
        }

    }
    return (<>
    </>);
}

export default FirstDigit;