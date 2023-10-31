import React, { useState } from 'react'
import Home from './Home'

function StateUp() {
    const [nameData, setNameData] = useState('')
    const getFunction = (data) => {
        console.log(data);
        setNameData(data)
    }
  return (
    <div>
        <h2>Parent : {nameData}</h2>
        <h1>This is State Up Components</h1>
      <Home getData={getFunction} send = "EA25" />
    </div>
  )
}

export default StateUp;