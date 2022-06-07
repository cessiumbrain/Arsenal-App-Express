import axios from "axios"
import { useState } from "react"

const Login = (props)=>{
    const [username, updateUsername] = useState('')
    const [password, updatePassword]= useState('')

    return(
        <div>
            <label>Username</label>
            <input onChange={(e)=>{updateUsername(e.target.value)}}></input>
            <label>Password</label>
            <input onChange={(e)=>{updatePassword(e.target.value)}}></input>
            <small>{props.loginError}</small>
            <button onClick={()=>{props.onLoginClick(username, password)}}>Login</button>
        </div>
        
    )
}

export default Login