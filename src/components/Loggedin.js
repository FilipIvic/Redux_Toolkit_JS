import React from 'react'
import { useSelector } from 'react-redux';

export const Loggedin = () => {
    const { name } = useSelector((state) => state.login);
    return (
        <div>
            <p>LoggedIn component</p>
            <h1>The name in Loggedin component is: {name}</h1>
       </div>
    )
}

export default Loggedin

