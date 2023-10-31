import React, { createContext } from 'react'
import { useState } from 'react';
import Home from './Home';
import About from './About';

export const Store = createContext();

function StoreCompo() {
    const [data, setData] = useState([
        {name : "EA25"},
        {name : "EA24"},
        {name : "EA26"}
    ])
  return (
    <>
        <Store.Provider value={{data, setData}}>
            <Home />
            <About />
        </Store.Provider>
      
    </>
  )
}

export default StoreCompo