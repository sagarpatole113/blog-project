import axios from 'axios';
import { useContext } from 'react';
import { useRef } from 'react';
import { Context } from '../../context/Context';
import "./login.css"
import { toast } from "react-toastify";

const Login = () => {

  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch , isFetching} = useContext (Context)

  const handleSubmit = async (e)=>{
    
    e.preventDefault();

    dispatch({type: "LOGIN_START"});
    try{
      const res = await axios.post("/auth/login",{
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload: res.data});
      toast.success("Login successful")
    }
    catch(err){
      dispatch({type:"LOGIN_FAILURE"});
      toast.error("Invalid login credintials")
      window.location.replace("/login")
    }
  }
  return (
    <div className='hight'>
    <div className="login-form">
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="content">
        <div className="input-field">
          <input type="text" placeholder="Username" ref={userRef} />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" ref={passwordRef} />
        </div>
      </div>
      <div className="action">
        <button type='submit' disabled={isFetching}>Sign in</button>
      </div>
     </form>
     </div>
  </div>
  )
}

export default Login
