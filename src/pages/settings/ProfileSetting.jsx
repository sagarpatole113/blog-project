import React, { useState } from 'react'
import "./setting.css"
import { useContext } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'



const ProfileSetting = () => {
  const {user,dispatch} =  useContext (Context)
  const [file,setFile] = useState(null);
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [success,setSuccess] = useState(false);
  const PF = "http://localhost:5000/images/"
  const defaultProfile = "http://localhost:5000/images/defaultprofile.jpg"

  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type: "UPDATE_START"})
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    }
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename)
      data.append("file",file)
      updatedUser.profilePic = filename;
      try{
        await axios.post("/upload", data)
      
      }
      catch(err){}
    }
    try{
       const res = await axios.put("/users/" + user._id, updatedUser)
        setSuccess(true); 
        dispatch({type: "UPDATE_SUCCESS",payload: res.data})
    }
    catch(err){
      dispatch({type: "UPDATE_FAILURE"})
    }
   
  }

 

//   const handleDelete = async ()=>{
//     try{
//         await axios.delete(`/users/${user._id}`,
//         {
//            data:{_id:user._id}
//         })
//         window.location.replace("/")
//     }
//     catch(err){}
// }
 

  return (
    <div className='setting'>  
      <div className="settingsWrapper">
       <div className="settingsTitle">
         <span className="settingsUpdateTitle">Update your account</span>
      {/*<span className="settingsDeleteTitle"  onClick={handleDelete}>Delete your account</span>*/}
       </div>
       <form className="settingsForm" onSubmit={handleSubmit}>
        <label>Profile Picture</label>
        <div className="settingsPP">
          {

            user.profilePic ?   ( <img src={file ? URL.createObjectURL(file)  : PF + user.profilePic} alt="" />)
            : (   <img src={file ? URL.createObjectURL(file)  : defaultProfile} alt="" />)

          }
         
            <label htmlFor='fileInput'>
        <i className="settingsPPIcon fa-solid fa-pen-to-square"></i>
        </label>
        <input type="file" id='fileInput' style={{display:"none"}} 
        onChange={(e)=> setFile(e.target.files[0])}
        />
        </div>
        <label>Username</label>
        <input type="text" placeholder={user.username}
        onChange={e=>setUsername(e.target.value)} required/>
        <label>Email</label>
        <input type="email" placeholder={user.email} required
        onChange={e=>setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" 
        onChange={e=>setPassword(e.target.value)} required/>
        <button className="settingsSubmit" type='submit'>Update</button>
        {success && <span style={{color: "green"}}>Profile has been Updated...</span>}
        </form>

      </div>
    
    </div>
  )
}

export default ProfileSetting
