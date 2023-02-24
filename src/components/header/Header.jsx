import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
       <div className='headerTitles'>
        <span className='headerTitleLg'>WriteYourBlog</span>
       </div>
       <img className='headerImg' src="../images/blog.png" alt="" />
    </div> 
  )
}

export default Header
