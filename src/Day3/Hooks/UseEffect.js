import React, { useEffect, useState } from 'react'

function UseEffectCompo() {
    let [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });
    let [data] = useState(0)

    const mouseMoving = (e) => {
        console.log("Mouse HUA RE")
        setMouseLocation({
            x: e.clientX,
            y: e.clientY,
        })

    }

    useEffect(() => {
        console.log("MOUNTING")
        window.addEventListener("mousemove", mouseMoving);

        return (() => {
            window.removeEventListener('mousemove', mouseMoving)
        })
    }, [mouseLocation]);


    return (
        <div>
            <h1>Mouse X co-ordinate : {mouseLocation.x}</h1>
            <h1>Mouse Y co-ordinate : {mouseLocation.y}</h1>
            <button onClick={(e) => console.log(e)}> Button Clicked {data} TIMES</button>
        </div>
    )
}

export default UseEffectCompo