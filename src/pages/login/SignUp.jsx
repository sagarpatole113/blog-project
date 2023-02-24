import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import "./signup.css"
import { toast } from "react-toastify";

const Signup = () => {
  
  const [username,setUsername] = useState(" ")
  const [email,setEmail] = useState(" ")
  const [password,setPassword] = useState(" ")
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
     try{
      const res = await axios.post("auth/register", {
        username,email,password
      }) 
      toast.success("Registrtion successful Please log in");
      res.data && window.location.replace("/login")
      
    }
       catch(err){
        toast.error("User is already exists")
       }
    
  }

  return (
    <div className='hight'>
    <div className="login-form">
    <form onSubmit={handleSubmit}>
      <h1>SignUp</h1>
      <div className="content">
      <div className="input-field">
          <input type="text" placeholder="Username"
          onChange={e=> setUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input type="email" placeholder="Email"
           onChange={e=> setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password"
           onChange={e=> setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="action">
       
        <button type='submit'>Register</button>
       </div>
    </form>
    </div>
 
   </div>
  )
}

export default Signup
