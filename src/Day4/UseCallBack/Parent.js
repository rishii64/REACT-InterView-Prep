import React, { useCallback, useState } from 'react'
import Child from './Child';

function Parent() {
    const [data, setData] = useState(0);
    const [count, setCount] = useState(100);

    const Increment = useCallback(() =>{
            console.log('This is called from parent....');
            setData(data + 10)
    }, [data]);
  return (
    <>
        <Child send = {Increment} />

        <h1>Data Value : {data}</h1>
        <button onClick={() => setData(data + 1)} >Parent Inc</button>
        <h1>Count Value : {count}</h1>
        <button onClick={() => setCount(count - 5)} >Dec</button>
    </>
  )
}

export default Parent;