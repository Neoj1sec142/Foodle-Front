
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// import { LoadUserDetails } from '../store/actions/UserActions'
import { GetUserDetail } from '../services/UserServices'
import { GetPostByUserId } from '../services/PostServices'
import Post from '../components/Post'


const Profile = (props) => {


    const thisProfileUser = useParams.username

    const [profileUser, setProfileUser] = useState({})
    const [posts, setPosts] = useState([])
    
    console.log(props, "PROPS")
    
    useEffect(() => {
        // e.prevent.default()
        if(props.user){
            const getUserData = async () => {
                const data = await GetUserDetail(props.user.id) // FIX THIS
                
                setProfileUser(data)
            }
            getUserData()
        }
    }, [props.user])

    useEffect(() => {
        const getPostData = async () => {
            const posts = await GetPostByUserId(props.user.id) // FIX THIS
            //console.log(posts)
            setPosts(posts)
        }
        getPostData()
    }, [props.user])
    
    console.log(posts, "BEFORE RETURN")

  if (profileUser.id) {
    return(
        <div className='user-profile'>
            <div className='profile-wrapper'>
                <div className='profile-banner'>
                    <div className='profile-info'>
                    <h1> Profile Page </h1>
                    {props.user.username = thisProfileUser ? "edit" : "no edit"}
                    <img src={profileUser.profileImg} alt='thumbnail' />
                    <h2>{profileUser.username}</h2>
                    <h3>{profileUser.fullname}</h3>
                    <h3>{profileUser.email}</h3>
                    <p>{profileUser.profileDescription}</p> 
                    </div>
                    {posts.map((post, i) => (
                        <Post post={post} />
                        
                        // <div className='post-container' key='i'>
                        //     <img src={post.image} className='post-image' />
                        //     <h5><a href={post.recipeUrl} target='_blank'>The Recipe (link)</a></h5>
                        //     <p>{post.description}</p>
                        // </div> 
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
