import React from 'react'


const ChessKnight = () => {
    let xpos = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']; 

    let cell = "c2";

    let cellArr =  cell.split("");

    if ((cellArr[0] === 'a' || cellArr[0] === 'h' ) &&  (cellArr[1] == 1 || cellArr[1] == 8) ) {
        return  2; 
    }else if((cellArr[0] === 'b'  || cellArr[0] === 'g' ) &&  (cellArr[1] == 2 || cellArr[1] == 7) ){
            return 3;      
    }else if(xpos.indexOf(cellArr[0]) > 1  || xpos.indexOf(cellArr[0]) > 6  &&  (cellArr[1] > 3 && cellArr[1] < 8) ){
        return 4;
    }else if(cellArr[1] < 3  || cellArr[1] > 5 ){
        return 6
    }else{
        return 8;
    }
    

   



    return (  <></>);
}
 
export default ChessKnight;