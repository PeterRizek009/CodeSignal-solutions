import React from 'react'


const FindEmailDomain = () => {
       let mail = "prettyandsimple@example.com";

       const domain =  [...mail].filter((el) => el === "@" )

       console.log(mail.slice(mail.lastIndexOf('@'), mail.length));



    return (<></>);
}

export default FindEmailDomain;