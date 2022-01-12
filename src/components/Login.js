import React, {useState} from "react"
import { useDispatch } from 'react-redux';
import { changeName } from '../redux/login'

export const Login = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            {console.log("Hey")}
            <p>Login component</p>
            <input type="text" placeholder="Enter your name" value={name} onChange={(event)=>handleNameChange(event)}></input>
            <button onClick={() => dispatch(changeName(name))}>Login</button>
       </div>
    )
}

export default Login
