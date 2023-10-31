import React, { useReducer, useState } from 'react'

const initialState = {
    balance: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'deposit':
            return { balance: state.balance + action.amount }
        case 'withdraw':
            return { balance: state.balance - action.amount }
        default:
            return state.balance
    }
}
export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [amount, setAmount] = useState(0)
    const handleDepo = () => {
        dispatch({ type: 'deposit', amount: parseInt(amount) })
    }
    const handleWith = () => {
        dispatch({ type: 'withdraw', amount: parseInt(amount) })
    }
    return (
        <>
            <h1>UseReducer Hook</h1>

            <h2>Account Balance : {state.balance}</h2>
            <input type='number' placeholder='enter amount' name='amount' onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleDepo}>Deposit</button>
            <button onClick={handleWith}>Withdraw</button>
        </>
    )
}
