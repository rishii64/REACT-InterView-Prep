import React from 'react'
import HOC from './HOC'

function Opponent1(props) {
    return (
        <>
            <h2>Amount for Bidding Player 1 : ${props.auction}</h2>
            <button onClick={props.handleAuction}>Lets Put 1</button>
        </>
    )
}
export default HOC(Opponent1)