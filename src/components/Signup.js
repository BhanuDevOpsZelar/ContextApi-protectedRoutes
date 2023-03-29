import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const {signUp} = useUserAuth()
    const navigate = useNavigate();

    const handleSignUp = async(e)=>{
        e.preventDefault();
        setError("")
        try{
            await signUp(email, password)
            navigate("/");
        }catch(err){
            setError(err.message)
        }
    }
  return (
    <div className='App'>

       <h2>Firebase Authentication Signup</h2> <br />
       {error} <br />
      <input type="email" placeholder='Email Address' onChange={(e)=> setEmail(e.target.value)}/> 
      <input type="password" placeholder='Passwordd' onChange={(e)=> setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>

      <p>Already have an account? <Link to="/">Login</Link> </p>

    </div>
  )
}

export default Signup
