import React from 'react'
import { useRef } from 'react'

function UseRefCompo() {
    const inputRef = useRef(null);
    console.log(inputRef);

    function getData(){
        console.log(inputRef.current.value)
        inputRef.current.focus();
        inputRef.current.style.background = "red"
    }

  return (
    <>
        <input type='text' ref={inputRef} placeholder='Write something' />
        <button onClick={getData} >Submit</button>
      
    </>
  )
}

export default UseRefCompo;