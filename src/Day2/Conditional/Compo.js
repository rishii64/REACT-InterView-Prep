import React from 'react'
import { useState } from 'react'

function Compo() {
    const [value, setValue] = useState(true);
    console.log(value);
  return (
    <>
      {/* <h1>{value}</h1> */}
      {/* {value ? <Call1 /> : <Call2 />} */}
      {value ? <Call1 /> : null}
      {value && <Call1 /> }
      <button onClick={()  => setValue(!value)}>Change</button>
    </>
  )
}

export default Compo


function Call1(){
    return(
        <>
            <h1>This is Components One</h1>
        </>
    )
}

function Call2(){
    return(
        <>
            <h1>This is Components Two</h1>
        </>
    )
}