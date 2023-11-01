import React from "react";
import HOC from "./HOC";

function Opponent2(props){
    return(
        <>
            <h2>Amount for Bidding Player 2 : ${props.auction}</h2>
            <button onClick={props.handleAuction2}>Lets Put 2</button>
        </>
    )
}
export default HOC(Opponent2)