import React, { useState } from 'react'

function Home(props) {
    const [name, setName] = useState('')
    const handleSubmit = () => {
        props.getData(name)
        // console.log(name);
    }
  return (
    <>
      <h2>This is our Home Compo</h2>
      <h4>{props.send}</h4>
      <label>Name</label>
      <input type='text' name='name' onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit} >Submit</button>
    </>
  )
}

export default Home;