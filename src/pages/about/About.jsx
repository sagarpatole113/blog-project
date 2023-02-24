import './about.css'


const About = () => {

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className="sidebarImg"src="../images/Sagar-Patole.jpeg" alt="" />
        <p>Lorem ipsum dolor sit amet consect
          etur adipisicing elit. Amet nobis magi</p>
      </div>
      
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW ME</span>
        <ul className="sidebarSocial">
          <a href="https://www.instagram.com/sagarpatole113/" className='link'>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          </a>
        
        </ul>
      </div>
    </div>
  )
}

export default About
