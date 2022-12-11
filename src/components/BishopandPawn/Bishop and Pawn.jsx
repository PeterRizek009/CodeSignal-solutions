import React from 'react'


const BishopandPawn = () => {

    let xpos = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    let bishop = "a1";
    let pawn = "c3";

    let xminus = (xpos.indexOf((pawn.split(""))[0])) - (xpos.indexOf((bishop.split(""))[0]));
    let yminus = (pawn.split(""))[1] - (bishop.split(""))[1] ;
     if (Math.abs(xminus)  === Math.abs(yminus)) {
        console.log(true);
        return true;
    }else{
        console.log(false);
        return false;
    }
    


    return (<></>);
}

export default BishopandPawn;