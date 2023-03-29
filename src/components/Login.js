import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const {LogIn} = useUserAuth()
    const navigate = useNavigate();
    
    const handleLogin = async(e)=>{
        e.preventDefault();
        setError("")
        try{
            await LogIn(email, password)
            navigate("/home")
        }catch(err){
            setError(err.message)
        }
    }
  return (
    <div className='App'>
      <h2>Firebase Authentication Login</h2> <br />
      {error}
      <input type="email" placeholder='Email Address' onChange={(e)=> setEmail(e.target.value)}/> 
      <input type="password" placeholder='Passwordd'  onChange={(e)=> setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>

      <p>Create new account? <Link to="/signup">Signup</Link>
</p>
    </div>
  )
}

export default Login
