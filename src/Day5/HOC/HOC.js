import React, { useState } from "react";

const HOC = (BiddingData)=>{

    const BiddingFun = ()=>{
        const [auction, setAuction] = useState(1)
        const handleAuction = ()=>{
            setAuction(auction*2)
        }

        const handleAuction2 = ()=>{
            setAuction(auction*3)
        }

        return(
            <BiddingData auction = {auction} handleAuction={handleAuction} handleAuction2={handleAuction2} />
        )
    }
    return BiddingFun
}
export default HOC