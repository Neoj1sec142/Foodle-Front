
import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// import { LoadUserDetails } from '../store/actions/UserActions'
import { GetUserDetailByUsername } from '../services/UserServices'
import { GetPostByUserId } from '../services/PostServices'
import Post from '../components/Post'


const Profile = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const thisProfileUser = params.username

    const [profileUser, setProfileUser] = useState({})
    const [posts, setPosts] = useState([])
    
    console.log(props, "PROPS")
    
    useEffect(() => {
        if(thisProfileUser){
            const getUserData = async () => {
                const data = await GetUserDetailByUsername(thisProfileUser)
                setProfileUser(data)
            }
            getUserData()
        }
    }, [thisProfileUser, props.user])

    useEffect(() => {
        const getPostsByProfileUser = async () => {
          if (profileUser.id) {  
            const posts = await GetPostByUserId(profileUser.id) // FIX THIS
            console.log("GETPOSTS BY PROF USER", profileUser, posts)
            setPosts(posts)
            }
        }
        getPostsByProfileUser()
    }, [profileUser])
    

    const goToUpdate = () => {
        navigate('update')
    }


console.log("THIS PROFILE USER", thisProfileUser)

  if (profileUser.id && props.authenticated) {
    return(
        <div className='user-profile'>
            <div className='profile-wrapper'>
                <div className='profile-banner'>
                    <div className='profile-info'>
                    <h1> {profileUser.username} </h1>


                    {/* {(props.user.username === thisProfileUser) ?
                    <p>OKAY</p> : <p>NOT OKAY</p>} */}


                    {props.user.username === thisProfileUser ? <button onClick={() => goToUpdate()}>
                        
                        Edit your profile</button> : "no edit"}
                    <div className='profile-img-container'> 
                        <img src={profileUser.profileImg} alt='thumbnail' />
                    </div>
                    <h4>Name: {profileUser.fullname}</h4>
                    <h4>Email: {profileUser.email}</h4>
                    <p>{profileUser.profileDescription}</p> 
                    </div>
                    {posts.map((post, i) => (
                        <div className='post-container' key={i}>
                            <Post post={post} />
                        </div> 
                    ))}
                    
                </div>
            </div>
        </div>
    )
  } else {
      return (
          <div className='loading'>Loading...</div>
      )
  }  
}
export default Profile
