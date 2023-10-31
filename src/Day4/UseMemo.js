import React, { useMemo } from "react";
import { useState } from "react";

function UseMemoCompo() {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);

    // function AddFive(){
    //     console.log('Call add...')
    //     return add * 5;
    // }

    const callMemo = useMemo(function AddFive(){
        console.log('Call add...')
        return add * 5;
    }, [add]);

    return (
        <>
            <h3>Add Function : {callMemo}</h3>
            {/* <h3>Add Function : {AddFive()}</h3> */}
            <h2>Add : {add}</h2>
            <button onClick={() => setAdd(add + 1)}>Increment</button>
            <h2>Sub : {sub}</h2>
            <button onClick={() => setSub(sub - 1)}>Decrement</button>
        </>
    );
}

export default UseMemoCompo;