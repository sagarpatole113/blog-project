import React, { useContext} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
const NavBar = () => {
  
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const defaultProfile = "http://localhost:5000/images/defaultprofile.jpg"
 

  const handleLogout = ()=>{
     dispatch({type: "LOGOUT" })
  }
  return (
  
    <div className='nav'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className='topListItems'>
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className='topListItems'>
          <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className='topListItems'>
          <Link className="link" to="/about">ABOUT</Link>
          </li>
          <li className='topListItems' onClick={handleLogout}>
          {user && 'LOGOUT'} 
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link to="/settings">
            <img className="topImg" src={user.profilePic ?  defaultProfile : PF+user.profilePic} alt="" />  
            </Link> 
            
                    ):(
          <ul className="topList">
          <li className='topListItems'>
          <Link className="link" to="/login">LOGIN</Link>
          </li>
          <li className='topListItems'>
          <Link className="link" to="/register">REGISTER</Link>
          </li>

          </ul>
       ) }

        
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default NavBar
