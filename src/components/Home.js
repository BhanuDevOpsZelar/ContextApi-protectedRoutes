import React from 'react'
import { useUserAuth } from '../context/UserAuthContext';

const Home = () => {
    const {user, LogOut} = useUserAuth();

    const handleLogOut=async()=>{
        try{
            await LogOut()
        }catch(err){
            console.log(err.message);
        }
    }
  return (
    <div > 
        <h2>Welcome to Home Page</h2> <br />
        {user && user.email}
        <div>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    </div>
  )
}

export default Home