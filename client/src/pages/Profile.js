
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// import { LoadUserDetails } from '../store/actions/UserActions'
import { GetUserDetail } from '../services/UserServices'
import { GetPostByUserId } from '../services/PostServices'
import Post from '../components/Post'


const Profile = (props) => {
     
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    
    console.log(props, "PROPS")
    
    useEffect(() => {
        // e.prevent.default()
        if(props.user){
            const getUserData = async () => {
                const data = await GetUserDetail(props.user.id)
                
                setUser(data)
            }
            getUserData()
        }
    }, [props.user])

    useEffect(() => {
        const getPostData = async () => {
            const posts = await GetPostByUserId(props.user.id)
            //console.log(posts)
            setPosts(posts)
        }
        getPostData()
    }, [props.user])
    
    console.log(posts, "BEFORE RETURN")

  if (user.id) {
    return(
        <div className='user-profile'>
            <div className='profile-wrapper'>
                <div className='profile-banner'>
                    <div className='profile-info'>
                    <h1> Profile Page </h1>
                    <h2>{user.fullname}</h2>
                    <h3>{user.email}</h3>
                    <h3>{user.username}</h3> 
                    </div>
                    {posts.map((post, i) => (
                        
                        
                        <div className='post-container' key='i'>
                            <img src={post.image} className='post-image' />
                            <h5><a href={post.recipeUrl} target='_blank'>The Recipe (link)</a></h5>
                            <p>{post.description}</p>
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
