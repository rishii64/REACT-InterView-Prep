import React, { useContext } from 'react'
import { Store } from './StoreCompo';

function Home() {
   const contextData = useContext(Store).data;
   console.log(contextData);
  return (
    <h2>Home Page</h2>
  )
}

export default Home;