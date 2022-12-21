import React from 'react'


const IsMAC48Address = () => {

    let mac = "00-1*-63-84-45-e6";
    var maCheck = mac.split('-');
    
//     let noOFHyphen = [...mac].filter((el) => el === '-');
//     let alphapetCheck =  mac.replaceAll('-' , ''); 
//     alphapetCheck=  alphapetCheck.replaceAll(/[0-9]/g, ''); 
//    let alphapetNo =  [...alphapetCheck].filter((el) => el.match(/^[A-F]*$/) )
    
   
    return maCheck.length == 5 && maCheck.every((el) => /^[A-F0-9]{2}$/.test(el))



    return (<></>);
}

export default IsMAC48Address;