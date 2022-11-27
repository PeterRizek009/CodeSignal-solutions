import React from 'react'

const KnapsackLight = () => {

    let value1 = 5;
    let weight1 = 3;
    let value2 = 7;
    let weight2 = 4;
    let maxW = 6;
     if(maxW < weight1  && maxW <  weight2){
        console.log(0);
        return (0);
     }
     else if (maxW >  weight1 && maxW >  weight2){
        console.log(Math.max(value1,value2));
        return(Math.max(value1,value2)); 
    }
    else if (maxW >= (weight1 + weight2)) {
        console.log(value1 + value2);
        return (value1 + value2);
    }else if (maxW >=  weight1){
        console.log(value1);
        return (value1);  
    }else{
        console.log(value2);
        return (value2); 
    }
    
    return (<></>);
}

export default KnapsackLight;
