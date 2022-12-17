import React from 'react'

const ElectionsWinners = () => {
    let votes = [1, 3, 3, 1, 1];
    let k = 0;
    let count = 0;
   
   if(k === 0){
      const zeroCase = votes.filter(element => element === Math.max(...votes));
        if (zeroCase.length > 1) {
            return 0;
        }else{
            return 1;
        }
   }

        for (let i = 0; i < votes.length; i++) {
            let temp = votes[i] + k;
            if (temp > Math.max(...votes)) {
                count++;
            }
        }

   
    console.log(count);
    return count;
    
    


    return (<>
    </>);
}

export default ElectionsWinners;
;