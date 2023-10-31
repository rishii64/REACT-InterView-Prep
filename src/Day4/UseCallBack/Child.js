import React, { memo } from 'react'

function Child(props) {
    console.log('Child Components......');
  return (
    <div>
      <button onClick={props.send}>Child Inc</button>
    </div>
  )
}

export default memo(Child);