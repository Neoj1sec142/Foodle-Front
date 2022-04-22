import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// import { LoadUserDetails } from '../store/actions/UserActions'
import { GetUserDetail, UpdateUserProfile } from '../services/UserServices'
import Post from '../components/Post'


const ProfileUpdate = (props) => {
     
  const [userDetails, setUserDetails] = useState({})
    
  // console.log(props, "PROPS") 
    
  useEffect(() => {
      // e.prevent.default()
      if(props.user){
          const getUserData = async () => {
              const data = await GetUserDetail(props.user.id)                
              setUserDetails(data)
          }
          getUserData()
      }
  }, [props.user])

  useEffect(() => {
    console.log("ONCHANGE DETAILS",userDetails)
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
      setUserDetails({...userDetails, [e.target.name]: e.target.value}) 
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      await UpdateUserProfile(props.user.id, userDetails) 
      navigate(`/profile/${props.user.username}`)
  }



    if (userDetails.id) {
      return(
        <form className='profile-update-container card-overlay centered' onSubmit={handleSubmit}>
          <h3>Update Profile</h3>
          
          <div className='profile-update-pic'>
            {userDetails.profileImg ? 
              <img src={userDetails.profileImg} style={{maxWidth:'100px'}} alt='profile_img' />
              : "No image"
            }
            </div>
            <div className='input-wrapper'>
            <label for='profileImg'>Profile picture (Url): </label>
            <input 
              onChange={handleChange}
              type='url' 
              value={userDetails.profileImg} 
              name='profileImg' 
              maxlength='255'/>            
          </div>

          <div className='input-wrapper'>
            <label for='fullname'>Full name: </label>
            <input 
              onChange={handleChange}
              type='text' 
              value={userDetails.fullname} 
              name='fullname' 
              maxlength='255'
              required 
            />
          </div>
          <div className='input-wrapper'>
            <label for='email'>Email: </label>
            <input 
              onChange={handleChange}
              type='email' 
              value={userDetails.email} 
              name='email' 
              maxlength='255'/>
          </div>
          <div className='input-wrapper'>
            <label for='profileDescription'>About You: </label>
            <br />
            <textarea 
              onChange={handleChange}
              value={userDetails.profileDescription} 
              name='profileDescription' 
            />
          </div>

          <button type='submit'>Save</button>
        </form> // className='profile-update-container'
      )
    } else {
        return (
            <div className='loading'>Loading...</div>
        )
    }  
  }
  export default ProfileUpdate
  