import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function APIData() {
    const [user, setUser] = useState()
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setUser(response.data))
            .catch((err) => console.log(err))
    }, [])
    // console.log(user);
    return (
        <>
            <h1>API Data</h1>
            {user?.map((item, index) => {
                return (
                    <div key={index}>
                        <h2>Name: {item.name}</h2>
                        <h3>UserName: {item.username}</h3>
                    </div>
                )
            })}
        </>
    )
}
