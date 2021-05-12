import React from 'react'
import { useHistory } from "react-router-dom";
export default function Resistration() {
    const History=useHistory();
    console.log(History);
    return (
        <div>
            <h1>Welcome to Registration Page</h1>
            <button onClick={()=>History.push('/Registration1')}>Send</button>
        </div>
    )
}
